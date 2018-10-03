import { Component, OnInit } from '@angular/core';
import { Gateway, Node, HardwareService} from './tb-device.service';

@Component({
  selector: 'app-tb-device',
  templateUrl: './tb-device.component.html',
  styleUrls: ['./tb-device.component.css']
})
export class TbDeviceComponent implements OnInit {
  node: Node[];
  gateway: Gateway[];

  tabIndex: Number = 0;

  HardwaretabChanged(newTabIndex) {
    // console.log(newTabIndex);
  if (this.tabIndex !== newTabIndex) {
      this.tabIndex = newTabIndex;
    }
}
  constructor(private hardwareService: HardwareService) {
    this.node =  hardwareService.getNode();
    this.gateway = hardwareService.getGateway();
  }

  ngOnInit() {
  }

}
