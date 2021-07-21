import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular-g1-project';
  title = 'This is my first Angular project';
  appMessage = "This is for input parameter";


  appEvent(event){
    alert(event);
  }
}
