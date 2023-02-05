import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  page = 1;
  pageSize = 3;
  userId: number = 1;
  posts: Array<any> = [];
  userName: string | null = '';
  constructor(private route: ActivatedRoute, private appService: AppServiceService) {

  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((p) => {
      this.userId = Number(p.get('userId'));
      this.userName = p.get('userName');
    })
    this.appService.getPostByUserId(this.userId).subscribe((data) => {
      for (let u of data) {
        this.posts.push(u);
      }
    })
  }

}
