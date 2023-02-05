import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: Array<any> = [];
  page=1;
  pageSize=3;
  constructor(private appService: AppServiceService) { }

  ngOnInit(): void {
       this.appService.getAllRegisterUsers().subscribe((data) => {
        for(let u of data){
          this.users.push(u);
        }
       })

  }


  onChange(event: any){
    console.log(event);
  }
}
