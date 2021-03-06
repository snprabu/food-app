import { Component, OnInit } from '@angular/core';
import { LocationServiceService } from 'src/app/services/location-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  clocation: any;
  caddress: any;

  constructor(
    private locationService: LocationServiceService
  ) { }

  ngOnInit() {
    this.locationService.getPosition()
    .then(pos=>
    {
        this.clocation = `${pos.lng},${pos.lat}`;
    });    
  }

}
