import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GetImagesService {

  constructor(private http: HttpClient) { }

  fetchImages(): Observable<any>{
    return this.http.get('https://picsum.photos/v2/list')
  }
}
