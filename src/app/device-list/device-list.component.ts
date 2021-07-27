import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceService } from '../device.service';
import { Device } from './../models';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  devices : Device[];

  // devices : Device[]= [
  //   {
  //     name: "Device01",
  //     brand: "Dell",
  //     model: "Latitude 120"
  //   },
  //   {
  //     name: "Device02",
  //     brand: "HP",
  //     model: "Pavillion"
  //   }
  // ]


  constructor(
    private router: Router,
    private deviceService: DeviceService
    ) { }

  ngOnInit(): void {
    this.devices = this.deviceService.getDevices();
  }

  addDevice(){
    this.router.navigate(['/add']);
  }

}
