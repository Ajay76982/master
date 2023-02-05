import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-view-photos',
  templateUrl: './view-photos.component.html',
  styleUrls: ['./view-photos.component.scss']
})
export class ViewPhotosComponent implements OnInit {

  albumId: number = 1;
  albumTitle: string| null = '';
  images: Array<any> = [];

  constructor(private route: ActivatedRoute, private appService: AppServiceService) {

  }


  ngOnInit(): void {

    this.route.paramMap.subscribe((p) => {
      this.albumId = Number(p.get('albumId'));
      this.albumTitle = p.get('title');
    })
    this.appService.getPhotosByAlbumId(this.albumId).subscribe((data) => {
      for (let u of data) {
        this.images.push(u);
      }
    })
  }

}
