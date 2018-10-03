import { Component, OnInit } from '@angular/core';
import { Marker, Route, DashboardService } from './tb-dashboard.service';

@Component({
  selector: 'app-tb-dashboard',
  templateUrl: './tb-dashboard.component.html',
  styleUrls: ['./tb-dashboard.component.css'],

})
export class TbDashboardComponent implements OnInit {

  routes: Route[];
  markers: Marker[];

  constructor(dashboardservice: DashboardService) {
    this.markers = dashboardservice.getMarkers();
    this.routes = dashboardservice.getRoutes();
  }
  setMode(e) {
    this.routes = this.routes.map(function (item) {
      item.mode = e.value;
      return item;
    });
  }
  selectColor(e) {
    this.routes = this.routes.map(function (item) {
      item.color = e.value;
      return item;
    });
  }
  ngOnInit() {
    // $('.footer').hide();
    // $('body').css('background', '#ffffff');
    // $('.content').css('background', '#ffffff');

  }

}
