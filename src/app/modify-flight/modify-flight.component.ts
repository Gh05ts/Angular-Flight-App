import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  providerTypes:string[] = PROVIDER_TYPES

  isCodeValid: boolean = true
  isTypeValid: boolean = true

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
    const some = e.target as HTMLInputElement
    const sm = some.value

  }

  validateType (e: Event) {
    
  }

}
