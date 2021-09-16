import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { airline } from 'src/models/airline';
import { crudRepo } from 'src/services/crudRepository';
import { TransferService } from 'src/services/transferService';
import { PROVIDER_CODES, PROVIDER_TYPES } from '../app.constants';

@Component({
  selector: 'app-modify-flight',
  templateUrl: './modify-flight.component.html',
  styleUrls: ['./modify-flight.component.css']
})
export class ModifyFlightComponent implements OnInit {

  providerCodes: string[] = PROVIDER_CODES
  providerTypes: string[] = PROVIDER_TYPES
  
  formModel: airline = {
    providerName: "",
    providerCode: "",
    providerType: ""
  }
  
  formCodeModel: formValidType = {
    isValid: true,
    message: ""
  }

  formTypeModel: formValidType = {
    isValid: true,
    message: ""
  }
  
  enableButton: boolean = false

  constructor(
    private repo: crudRepo,
    private router: Router,
    private airlineCache: TransferService, 
    ) {}

  ngOnInit(): void {
    document.title = "Flight Modifier"
    this.airlineCache.update()
  }
  
  validateCode (_: Event) {
    const isFromOptions = this.providerCodes.includes(this.formModel.providerCode)
    if (isFromOptions) {
      const currentDB = this.airlineCache.getCache()
      const isPresent = currentDB?.find(
        obj => obj.providerCode === this.formModel.providerCode
      )
      if(isPresent) {
        this.formCodeModel.isValid = true
        if(!this.formTypeModel.isValid) {
          this.validateType(_)
        }
      } else {
        this.formCodeModel.isValid = false
        this.enableButton = false
        this.formCodeModel.message = `Choose from these options: 
        ${currentDB?.map(val => val.providerCode)}`   
      }
    } else {
      this.formCodeModel.isValid = false
      this.formCodeModel.message = "*required"
      this.enableButton = false
    }
  }
  
  validateType (_: Event) {
    const codeValue = this.formModel.providerCode
    if(!this.formCodeModel.isValid || codeValue == "") {
      this.formTypeModel.isValid = false
      this.enableButton = false
      this.formTypeModel.message = "Choose Provider Code first"
      return
    }
    const isFromOptions = this.providerTypes.includes(this.formModel.providerType)
    if(isFromOptions) {
      const currentDb = this.airlineCache.getCache()
      const isSame = currentDb?.find(
        obj => obj.providerType === this.formModel.providerType 
        && 
        obj.providerCode === this.formModel.providerCode
      )
      if(isSame) {
        this.formTypeModel.isValid = false
        this.enableButton = false
        this.formTypeModel.message = `
        Current value is ${this.formModel.providerType} in database,
        Please choose a different value`
      } else {
        this.formTypeModel.isValid = true
        this.enableButton = true
      }
    } else {
      this.enableButton = false
      this.formTypeModel.isValid = false
      this.formTypeModel.message = "*required"
    }
  }
  
  onSubmit() {
    const currentDb = this.airlineCache.getCache()
    const obj: airline | undefined = currentDb?.find(
      obj => obj.providerCode === this.formModel.providerCode
    )
    const newObj: airline = { 
      ...obj,
      providerType: this.formModel.providerType
    } as airline
    this.repo.modifyFlight(newObj).subscribe(
      {
        next: _ => {
          this.airlineCache.invalidateCache()
          this.router.navigate(['/'])
        },
        error: err => alert
      }
    )
  }
  
}

interface formValidType {
  message: string,
  isValid: boolean
}