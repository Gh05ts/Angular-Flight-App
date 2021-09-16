import { Component, OnInit } from '@angular/core';
import { airline } from 'src/models/airline';
import { crudRepo } from 'src/services/crudRepository';
import { TransferService } from 'src/services/transferService';

@Component({
  selector: 'app-view-flight',
  templateUrl: './view-flight.component.html',
  styleUrls: ['./view-flight.component.css']
})
export class ViewFlightComponent implements OnInit {

  getData: airline[] = []
  filterWord: string = ''

  constructor(
    private repo: crudRepo, 
    private airlineCache: TransferService
  ) {}

  ngOnInit(): void {
    document.title = "Flight Viewer"
    this.getAirLines()
  }

  // fetches, updates cache everytime
  private getAirLines() {
    this.repo
    .getAllFlights()
    .subscribe({
      next: resp => {
        this.getData = resp
        this.airlineCache.setCache(resp)
      },
      error: err => alert 
    })
  }
    
}
