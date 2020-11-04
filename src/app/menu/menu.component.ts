import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	names:string[];
	content:string;
  constructor() { 
  	this.names= ["Home","Create","Remove","Update","Delete"];
  	this.content= "Welcome to my first angular app. This is going to be great!"
  }

  ngOnInit() {
  }

}
