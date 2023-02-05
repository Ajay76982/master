import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-view-album',
  templateUrl: './view-album.component.html',
  styleUrls: ['./view-album.component.scss']
})
export class ViewAlbumComponent implements OnInit {

  page = 1;
  pageSize = 3;
  userId: number = 1;
  albums: Array<any> = [];
  userName: string | null = '';
  constructor(private route: ActivatedRoute, private appService: AppServiceService) {

  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((p) => {
      this.userId = Number(p.get('userId'));
      this.userName = p.get('userName');
    })
    this.appService.getAlbumByUserId(this.userId).subscribe((data) => {
      for (let u of data) {
        this.albums.push(u);
      }
    })
  }

}
