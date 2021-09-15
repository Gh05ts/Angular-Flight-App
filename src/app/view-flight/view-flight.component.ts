import { Component, OnInit } from '@angular/core';
import { crudRepo } from 'src/services/crudRepository';

@Component({
  selector: 'app-view-flight',
  templateUrl: './view-flight.component.html',
  styleUrls: ['./view-flight.component.css']
})
export class ViewFlightComponent implements OnInit {

  air:any = []
  filterWord: string = ''

  constructor(private repo: crudRepo) {

  }

  ngOnInit(): void {
    this.getAirLines()
  }

  private getAirLines() {
    this.repo.getAllFlights().subscribe(prod => this.air = prod)
  }

}
