import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images = [180, 464, 24].map((n) => `https://picsum.photos/id/${n}/900/500`); 
  
  constructor() { }
  ngOnInit(): void {
  }

}
