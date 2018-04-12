import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mailprotector',
  templateUrl: './mailprotector.component.html',
  styleUrls: ['./mailprotector.component.css']
})
export class MailprotectorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
}
