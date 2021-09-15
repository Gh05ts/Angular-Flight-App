import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})
export class CreateFlightComponent implements OnInit {

  providerNames = [
    "Indigo",
    "SpiceJet",
    "Air Asia",
    "Go Air",
    "Jet Airways",
    "Air India"
  ]

  providerTypes = ["Domestic", "International"]

  providerCode: string = "6E-"

  constructor() { }

  ngOnInit(): void { }

  firstDropChanged(val: any) {
    const airline = val.target.value
    switch (airline) {
      case "Indigo":
        this.providerCode = "6E-"
        break
      case "SpiceJet":
        this.providerCode = "SG-"
        break
      case "Air Asia":
        this.providerCode = "I5-"
        break
      case "Go Air":
        this.providerCode = "G8-"
        break
      case "Jet Airways":
        this.providerCode = "9W-"
        break
      case "Air India":
        this.providerCode = "AI-"
        break
    }
  }

}
