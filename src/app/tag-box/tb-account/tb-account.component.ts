import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RelativeMass, Temperature, Marker, Route, ZoomingData, LanguageData, TripDetailsService } from './tb-account.service';
import { DxChartModule, DxChartComponent, DxRangeSelectorModule } from 'devextreme-angular';
declare var $: any;
@Component({
  selector: 'app-tb-account',
  templateUrl: './tb-account.component.html',
  styleUrls: ['./tb-account.component.css']
})
export class TbAccountComponent implements OnInit {
  // zoomedChart: DxChartComponent;
  internetLanguages: LanguageData[];
  temperaturesData: Temperature[];
  zoomingData: ZoomingData[];
  relativeMasses: RelativeMass[];
  // humid: Humid[];
  now: Date = new Date();
  showDev: string;
  showChart: string;
  showDevD: boolean;
  routes: Route[];
  markers: Marker[];
  highAverage = 8;
  lowAverage = 2.4;
  highAverageH = 60;
  lowAverageH = 28;
  highAverageTemp = 77;
  lowAverageTemp = 58;
  Title: string;
  @ViewChild('zoomedChart') zoomedChart: DxChartComponent;



  constructor(private detailservice: TripDetailsService) {
    this.relativeMasses = detailservice.getRelativeMasses();
    this.temperaturesData = detailservice.getTemperaturesData();
    this.internetLanguages = detailservice.getLanguagesData();
    this.zoomingData = detailservice.getZoomingData();
   // this.humid = detailservice.getZoomingDataHumid();
    this.markers = detailservice.getMarkers();
    this.routes = detailservice.getRoutes();
  }
  onToggle(enable: string) {
    this.showDev = enable;
  }
  onValueChanged(e: any) {
    this.zoomedChart.instance.zoomArgument(e.value[0], e.value[1]);
  }
  customizeLabel(point) {
    return point.argumentText + ': ' + point.valueText + '%';
  }
  showTitle( enable: string) {
    // this.Title = abc;
    this.showChart = enable;
    // this.showDev = enable;
  }
  customizeTooltipPie(arg) {
    return { text: arg.argumentText + '<br>' + arg.seriesName + ': ' + arg.valueText + 'B' };
}
customizePoint = (arg: any) => {
  if (arg.value > this.highAverage) {
      return { color: '#cb9b42', hoverStyle: { color: '#cb9b42' } };
  } else if (arg.value < this.lowAverage) {
      return { color: '#e6e6d4', hoverStyle: { color: '#e6e6d4' } };
  }
}
customizePointHumidity = (arg: any) => {
  if (arg.value > this.highAverageH) {
      return { color: '#4f9da6', hoverStyle: { color: '#4f9da6' } };
  } else if (arg.value < this.lowAverageH) {
      return { color: '#e6e6d4', hoverStyle: { color: '#e6e6d4' } };
  }
}
customizeLabelHumidity = (arg: any) => {
  if (arg.value > this.highAverageH) {
      return {
          visible: true,
          backgroundColor: '#4f9da6',
          customizeText: function (e: any) {
              return e.valueText + '%';
          }
      };
  }
}
customizeLabelShock = (arg: any) => {
  if (arg.value > this.highAverage) {
      return {
          visible: true,
          backgroundColor: '#cb9b42',
          customizeText: function (e: any) {
              return e.valueText + 'g/s';
          }
      };
  }
}
customizePointTemp = (arg: any) => {
  if (arg.value > this.highAverageTemp) {
      return { color: '#f34949', hoverStyle: { color: '#f34949' } };
  } else if (arg.value < this.lowAverageTemp) {
      return { color: '#6e5773', hoverStyle: { color: '#6e5773' } };
  }
}

customizeLabelTemp = (arg: any) => {
  if (arg.value > this.highAverageTemp) {
      return {
          visible: true,
          backgroundColor: '#f34949',
          customizeText: function (e: any) {
              return e.valueText + '&#176F';
          }
      };
  }
}

customizeTextTemp = (arg: any) => {
  return arg.valueText + '&#176F';
}
  ngOnInit() {
    this.showDev = 'map';
    this.showChart = 'Temperature';
    this.Title = 'Humidity';
  }



}
