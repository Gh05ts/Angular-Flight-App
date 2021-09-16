import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { airline } from 'src/models/airline';
import { crudRepo } from 'src/services/crudRepository';
import { TransferService } from 'src/services/transferService';
import { PROVIDER_CODES_MAP, PROVIDER_NAMES, PROVIDER_TYPES, PROVIDER_CODES } from '../app.constants';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})
export class CreateFlightComponent implements OnInit {

  providerNames:string[] = PROVIDER_NAMES
  providerCode: string[] = PROVIDER_CODES
  providerTypes:string[] = PROVIDER_TYPES

  formModel: airline = {
    providerName: '',
    providerCode: '',
    providerType: ''
  }

  constructor(
    private repo: crudRepo, 
    private router: Router,
    private airlineCache: TransferService
  ) {}

  ngOnInit(): void {
    document.title = "Flight Creator"
  }

  firstDropChanged(e: Event) {
    let airline = e.target as HTMLInputElement 
    const airlineName = airline.value
    const newValue = PROVIDER_CODES_MAP[airlineName]
    this.formModel.providerCode = newValue? newValue: ""
  }

  onSubmit () {
    const currentDB = this.airlineCache.getCache()
    const isPresent = currentDB?.find(obj => obj.providerCode === this.formModel.providerCode)
    if(isPresent) {
      alert("Provider Code already present, please choose another")
    }
    this.repo.addFlight(this.formModel).subscribe({
      next: resp => {
        const isPushed = currentDB?.push(resp)
        if (isPushed) {
          this.airlineCache.setCache(currentDB as airline[])
        }
        this.router.navigate(['/'])
      },
      error: alert
    })
  }

}
