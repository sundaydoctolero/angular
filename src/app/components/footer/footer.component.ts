import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public loggedInUser = JSON.parse(localStorage.getItem('user')).username;

  constructor() { }

  ngOnInit() {
  }

}
