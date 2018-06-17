import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  users = [{
    name: 'himanshu',
    doj: new Date(),
    role: 'Software Developer'
  }, {
    name: 'tausif',
    doj: new Date(),
    role: 'Automation Testing'
  }, {
    name: 'pooja',
    doj: new Date(),
    role: 'Developer'
  }, {
    name: 'shabith',
    doj: new Date(),
    role: 'Does lot of stuff'
  }];
  constructor() { }

  ngOnInit() {
  }

}
