import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { airline } from 'src/models/airline';
import { crudRepo } from 'src/services/crudRepository';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})
export class CreateFlightComponent implements OnInit {

  providerNames:string[] = [
    "Indigo",
    "SpiceJet",
    "Air Asia",
    "Go Air",
    "Jet Airways",
    "Air India"
  ]
  providerCode: string = ""
  providerTypes:string[] = ["Domestic", "International"]

  formModel: airline = {
    providerCode: '',
    providerName: '',
    providerType: ''
  }

  constructor(private repo: crudRepo, private router: Router) { }

  ngOnInit(): void {
    document.title = "Flight Creator"
  }

  firstDropChanged(val: any) {
    const airline = val?.target?.value
    switch (airline) {
      case "Indigo":
        this.formModel.providerCode = "6E-"
        break
      case "SpiceJet":
        this.formModel.providerCode = "SG-"
        break
      case "Air Asia":
        this.formModel.providerCode = "I5-"
        break
      case "Go Air":
        this.formModel.providerCode = "G8-"
        break
      case "Jet Airways":
        this.formModel.providerCode = "9W-"
        break
      case "Air India":
        this.formModel.providerCode = "AI-"
        break
      default:
        this.formModel.providerCode = ""
    }
  }

  onSubmit () {
    this.repo.addFlight(this.formModel).subscribe({
      next: resp => this.router.navigate(['/']),
      error: alert
    })
  }

}
