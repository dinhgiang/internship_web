import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css']
})
export class MenuUserComponent implements OnInit {
  sumOfNotification:number=3;
  nickname:string = "Trần Quang Linh"
  constructor() { }

  ngOnInit() {
  }

}
