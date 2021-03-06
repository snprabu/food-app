import { Component, OnInit } from '@angular/core';
import { GetImagesService } from 'src/app/services/get-images.service'

@Component({
  selector: 'app-promotional-offers',
  templateUrl: './promotional-offers.component.html',
  styleUrls: ['./promotional-offers.component.css']
})
export class PromotionalOffersComponent implements OnInit {

  imageList: any;

  constructor(private getImages: GetImagesService) { }

  ngOnInit(): void {
    this.getImages.fetchImages().subscribe(res => {
      this.imageList = res
    })
  }

}
