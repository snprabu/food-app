import { Injectable, OnInit } from '@angular/core';
import 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeoAddressServiceService{

  constructor(private http: HttpClient) { }
 
}
