import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { airline } from 'src/models/airline';
import { crudRepo } from 'src/services/crudRepository';
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
    providerCode: '',
    providerName: '',
    providerType: ''
  }

  constructor(private repo: crudRepo, private router: Router) { }

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
    this.repo.addFlight(this.formModel).subscribe({
      next: _ => this.router.navigate(['/']),
      error: alert
    })
  }

}
