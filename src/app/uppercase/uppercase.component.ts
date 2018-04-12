import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uppercase',
  templateUrl: './uppercase.component.html',
  styleUrls: ['./uppercase.component.css']
})
export class UppercaseComponent implements OnInit {

  mystring = '';
  constructor() { }

  ngOnInit() {
  }
  toApperCase() {
    let s = '';
    for (let i = 0; i <  this.mystring.length; i++) {
      const caracterCode = this.mystring.charCodeAt(i);
      s += (caracterCode > 96 && caracterCode < 123) ? String.fromCharCode(caracterCode - 32) : String.fromCharCode(caracterCode);
    }
    this.mystring = s;
  }
}
