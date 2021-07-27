import { Injectable } from '@angular/core';
import { Device } from './models';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

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

  constructor() { }

  getDevices(){
    return this.devices;
  }

  addDevice(device: Device){
    this.devices.push(device);
    console.log(this.devices);
  }
}
