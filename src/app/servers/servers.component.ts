import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;// ES 6 errow function syntax: ()= >

    }, 2000);

  }

  ngOnInit(): void {
  }

}
