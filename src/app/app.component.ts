import { Component } from '@angular/core';
import { Device } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular-g1-project';
  title = 'This is my first Angular project';
  // appMessage = "This is for input parameter";

  // appMessageArray = ['hi', 'hello', 'goodbye', 'go', 'stop', 'please'];

  // showComponent = true;

  // appEvent(event){
  //   alert(event);
  // }

  // showHide() {
  //   this.showComponent = !this.showComponent;
  // }

  devices : Device []= [
    {
      name: "Device01",
      brand: "Dell",
      model: "Latitude 120"
    },
    {
      name: "Device02",
      brand: "HP",
      model: "Pavillion"
    }

  ]

}
