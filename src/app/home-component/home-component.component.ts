import { Component, OnInit } from '@angular/core';
import { TransferService } from 'src/services/transferService';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(private airlineCache: TransferService) {}

  ngOnInit(): void {
    document.title = "Flight App"
    this.airlineCache.update()
  }

}
