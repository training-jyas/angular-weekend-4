import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  title = 'Lets learn binding!';
  obj: any = {
    name: 'somename',
    age: 34
  };
  constructor() { }

  ngOnInit() {
  }

  submit() {
    // console.log('input value changed', event.target.value);
    console.log('this.obj.name', this.obj.name);
  }
}
