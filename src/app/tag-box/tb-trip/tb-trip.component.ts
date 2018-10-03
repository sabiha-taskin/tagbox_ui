import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {
  DxSelectBoxModule,
  DxTextAreaModule,
  DxFormModule,
  DxFormComponent
} from 'devextreme-angular';
import { CompleteTrip, Customer, Employee, TripService } from './tb-trip.service';

@Component({
  selector: 'app-tb-trip',
  providers: [TripService],
  templateUrl: './tb-trip.component.html',
  styleUrls: ['./tb-trip.component.css']
})

export class TbTripComponent implements OnInit, AfterViewInit {
  @ViewChild(DxFormComponent) myform: DxFormComponent;
  customers: Customer[];
  complete: CompleteTrip[];
  employee: Employee;
  positions: string[];
  rules: Object;
  toggleactive = 0;
  tabIndex: Number = 0;
 // $: any;
  events: Array<string> = [];
 // selectedItemKeys: any[] = [];
  activeTab(value) {
      this.toggleactive = value;
  }
  tabChanged(newTabIndex) {
      // console.log(newTabIndex);
    if (this.tabIndex !== newTabIndex) {
        this.tabIndex = newTabIndex;
      }
  }
  constructor(private tripService: TripService) {
    this.customers =  tripService.getCustomers();
    this.complete =  tripService.getComplete();
    this.employee = tripService.getEmployee();
    this.positions = tripService.getPositions();
    this.rules = { 'X': /[02-9]/ };
  }
  // onCellPrepared(e) {
  //   if (e.rowType === 'data' && e.column.command === 'edit') {
  //     const isEditing = e.row.isEditing,
  //       $links = $(e.cellElement).find('.dx-link');

  //     $links.text('');

  //     if (isEditing) {
  //       $links.filter('.dx-link-save').addClass('dx-icon-save');
  //       $links.filter('.dx-link-cancel').addClass('dx-icon-revert');
  //     } else {
  //       $links.filter('.dx-link-edit').addClass('dx-icon-edit');
  //       $links.filter('.dx-link-delete').addClass('dx-icon-trash');
  //     }
  //   }
  // }
//   selectionChanged(data: any) {
//     this.selectedItemKeys = data.selectedRowKeys;
// }
  logEvent(eventName) {
    this.events.unshift(eventName);
}


  ngOnInit() {
  }
  ngAfterViewInit() {
    //  this.myform.instance.validate()
  }
  append() {
    const olddiv = document.getElementById('append');
    const newDiv = document.createElement('div');
    newDiv.className = 'row';
    newDiv.innerHTML = olddiv.innerHTML;
    document.getElementById('appendnew').appendChild(newDiv);
    const classname = document.getElementsByClassName('ti-minus');
    for (let i = 0; i < classname.length; i++) {
      classname[i].addEventListener('click', this.remove, false);
    }
  }
  remove(e) {
    e.target.parentNode.parentNode.parentNode.remove();
  }
  editTrip(e) {
    console.log('hi edit trip');
  }

}
