import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { crudRepo } from 'src/services/crudRepository';

@Component({
  selector: 'app-list-flights',
  templateUrl: './list-flights.component.html',
  styleUrls: ['./list-flights.component.css']
})
export class ListFlightsComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

}
