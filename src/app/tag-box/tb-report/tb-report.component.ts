import { Component, OnInit } from '@angular/core';
import { ReportService, Sale} from './tb-report.service';
import { DxDataGridModule, DxSelectBoxModule } from 'devextreme-angular';

@Component({
  selector: 'app-tb-report',
  templateUrl: './tb-report.component.html',
  styleUrls: ['./tb-report.component.css']
})
export class TbReportComponent implements OnInit {
  tabIndex: Number = 0;
  sales: Sale[];
  allMode: string;
  checkBoxesMode: string;

  tabChanged(newTabIndex) {
    // console.log(newTabIndex);
  if (this.tabIndex !== newTabIndex) {
      this.tabIndex = newTabIndex;
    }
}
  constructor(private reportService: ReportService) {
    this.sales = reportService.getSales();
    this.allMode = 'allPages';
    this.checkBoxesMode = 'onClick'
   }

  ngOnInit() {
  }

}
