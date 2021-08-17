import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  serverCreationStatus = 'No Server was Created';

  serverName = 'TestServer';
  serverCreated = false;
  fruit = "Orange";

  fruits = ['orange','apple'];
  

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;// ES 6 errow function syntax: ()= >

    }, 2000);

  }

  ngOnInit(): void {
  }

  onCreateServer() {

    this.serverCreated = true;
    this.fruits.push(this.serverName);
    this.serverCreationStatus = 'Server Was Created';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
