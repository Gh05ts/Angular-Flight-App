import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { crudRepo } from 'src/services/crudRepository';
import { TransferService } from 'src/services/transferService';

@Component({
  selector: 'app-delete-flight',
  templateUrl: './delete-flight.component.html',
  styleUrls: ['./delete-flight.component.css']
})
export class DeleteFlightComponent implements OnInit {

  constructor(
    private repo: crudRepo, 
    private router: Router, 
    private airlineCache: TransferService
  ) {}

  ngOnInit(): void {
    document.title = "Flight Destroyer"
  }

  // [ass]
}
