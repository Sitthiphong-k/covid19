import { Component } from '@angular/core';
import { environment } from './../environments/environment';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  constructor() {
    //console.log(environment.apiURL); // Logs false for default environment
  }
  ngOnInit() {
    
  }

}