import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { crudRepo } from 'src/services/crudRepository';

@Component({
  selector: 'app-list-flights',
  templateUrl: './list-flights.component.html',
  styleUrls: ['./list-flights.component.css']
})
export class ListFlightsComponent implements OnInit {

  air:any = []

  constructor(private repo: crudRepo) {

  }

  ngOnInit(): void {
    this.getAirLines()
  }

  private getAirLines() {
    this.repo.getAllFlights().subscribe(prod => this.air = prod)
  }

}
