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
  
  constructor(
    private repo: crudRepo,
    private router: Router,
    private airlineCache: TransferService, 
    ) {}

    ngOnInit(): void {
      document.title = "Flight Modifier"
    this.airlineCache.update()
  }
  
  validateCode (e: Event) {
    const target = e.target as HTMLInputElement
    const _code = target.value
    const isFromOptions = this.providerCodes.find(obj => obj === _code)
    console.debug(_code, isFromOptions)
    if (isFromOptions) {

    } else {
      this.formCodeModel.isValid = false
      this.formCodeModel.message = "*required"
    }
  }
  
  validateType (e: Event) {
    const target = e.target as HTMLInputElement
    const _type = target.value
    
  }
  
  onSubmit() {
    
  }
  
}

interface formValidType {
  message: string,
  isValid: boolean
}