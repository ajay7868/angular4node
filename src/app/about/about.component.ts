import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
public names=['ajay','khau','pooja','ankush'];
public colors="red";  
displayname=false
  constructor() { }

  ngOnInit() {
  }

}
