import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { airline } from 'src/models/airline';
import { formValidType } from 'src/models/formEdit';
import { crudRepo } from 'src/services/crudRepository';
import { TransferService } from 'src/services/transferService';
import { PROVIDER_CODES, PROVIDER_TYPES } from '../app.constants';

@Component({
  selector: 'app-delete-flight',
  templateUrl: './delete-flight.component.html',
  styleUrls: ['./delete-flight.component.css']
})
export class DeleteFlightComponent implements OnInit {

  providerCodes: string[] = PROVIDER_CODES
  providerTypes:string[] = PROVIDER_TYPES
  
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
    private airlineCache: TransferService
  ) {}

  ngOnInit(): void {
    document.title = "Flight Destroyer"
    this.airlineCache.update()
  }

  validateCode(_: Event) {
    if(this.formModel.providerCode == "") {
      this.formCodeModel.isValid = false
      this.formCodeModel.message = `*required`      
    } else {
      const currentDB = this.airlineCache.getCache()
      const isInDB = currentDB?.find(obj => obj.providerCode === this.formModel.providerCode)
      if(isInDB) {
        this.formCodeModel.isValid = true
        if(this.formTypeModel.isValid && this.formModel.providerType != "") {
          this.enableButton = true
        } else {
          this.validateType(_)
        }
      } else {
        this.formCodeModel.isValid = false
        this.formCodeModel.message = `This code in DB, 
        please use these values: ${currentDB?.map(obj => obj.providerCode)}`
      }
    }
  }

  validateType(_: Event) {
    if(this.formModel.providerType == "") {
      if(this.formModel.providerCode == "") {
        this.formTypeModel.isValid = false
        this.formTypeModel.message = "Please select code first"
        return
      }
      this.formTypeModel.isValid = false
      this.formTypeModel.message = "*required"
    } else {
      const currentDB = this.airlineCache.getCache()
      const isInDB = currentDB?.find(
        obj => obj.providerType === this.formModel.providerType && 
        obj.providerCode === this.formModel.providerCode
        )
      if(isInDB) {
        this.formTypeModel.isValid = true
        if(this.formCodeModel.isValid && this.formModel.providerCode != "") {
          this.enableButton = true
        } else {
          this.validateCode(_)
        }
      } else {
        this.formTypeModel.isValid = false
        this.formTypeModel.message = `${this.formModel.providerType} is not in DB,
        Please choose ${this.providerTypes.filter(obj => obj != this.formModel.providerType)}`
      }
    }
  }

  onSubmit() {
    const currentDB = this.airlineCache.getCache()
    const id = currentDB?.find(obj => obj.providerCode == this.formModel.providerCode)?.id
    console.log(id)
    if(typeof id != undefined) {
      this.repo.deleteFlight(id as number).subscribe(
        {
          next: _ => {
            this.airlineCache.invalidateCache()
            this.router.navigate(['/'])
          },
          error: alert
        }
      )
    } else {
      alert("something went wrong")
    }
  }

}
