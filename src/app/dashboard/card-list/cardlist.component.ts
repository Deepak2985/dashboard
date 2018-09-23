import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xv-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css']
})
export class CardListComponent implements OnInit {

  constructor() { }
  items = [
    { count: 15, title: "OPEN RFQs", message: "2 RFQ's Waiting for buyer's response", boxBgColor: "#b9dc8a", msgBgColor: "#e8f3d8" },
    { count: 12, title: "NEW ORDERS", message: "3 Orders waiting to be shipped", boxBgColor: "#fac870", msgBgColor: "#fdedcf" },
    { count: 5, title: "ORDERS", message: "3 Invoices pending for approval", boxBgColor: "#6fd7d7", msgBgColor: "#cff2f2" }
  ];
  ngOnInit() {
  }

}
