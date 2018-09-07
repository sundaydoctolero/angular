import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sale-rent-details',
  templateUrl: './sale-rent-details.component.html',
  styleUrls: ['./sale-rent-details.component.css']
})
export class SaleRentDetailsComponent implements OnInit {

  @Input() form;

  constructor() { }

  ngOnInit() {
  }

}
