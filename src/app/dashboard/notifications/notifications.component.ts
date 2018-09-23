import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'xv-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  closeComponent(element:ElementRef){
    console.log(element);
  }
}
