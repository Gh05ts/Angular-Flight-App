import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { crudRepo } from 'src/services/crudRepository';

@Component({
  selector: 'app-delete-flight',
  templateUrl: './delete-flight.component.html',
  styleUrls: ['./delete-flight.component.css']
})
export class DeleteFlightComponent implements OnInit {

  constructor(private repo: crudRepo, private router: Router) { }

  ngOnInit(): void {
    document.title = "Flight Destroyer"
  }

  // [ass]
}
