import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { crudRepo } from 'src/services/crudRepository';
import { TransferService } from 'src/services/transferService';

@Component({
  selector: 'app-modify-flight',
  templateUrl: './modify-flight.component.html',
  styleUrls: ['./modify-flight.component.css']
})
export class ModifyFlightComponent implements OnInit {

  constructor(
    private repo: crudRepo,
    private router: Router,
    private airlineCache: TransferService, 
  ) {}

  ngOnInit(): void {
    document.title = "Flight Modifier"
  }

}
