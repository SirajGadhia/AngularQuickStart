import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {

@Input() user: any;
 
  constructor() { }

  ngOnInit() {
  }

}
