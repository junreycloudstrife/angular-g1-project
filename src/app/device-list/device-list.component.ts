import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from './../models';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

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


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addDevice(){
    this.router.navigate(['/add']);
  }

}
