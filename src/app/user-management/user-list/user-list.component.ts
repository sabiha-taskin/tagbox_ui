import { Component, OnInit } from '@angular/core';
import { NeoUser } from './neo-user';
import { UserListService } from './user-list.service';
declare var $: any;
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: NeoUser[];

  constructor(private userListService: UserListService) { }

  onCellPrepared(e) {
    if (e.rowType === 'data' && e.column.command === 'edit') {
        const isEditing = e.row.isEditing,
            $links = $(e.cellElement).find('.dx-link');

        $links.text('');

        if (isEditing) {
            $links.filter('.dx-link-save').addClass('dx-icon-save');
            $links.filter('.dx-link-cancel').addClass('dx-icon-revert');
        } else {
            $links.filter('.dx-link-edit').addClass('dx-icon-edit');
            $links.filter('.dx-link-delete').addClass('dx-icon-trash');
        }
    }
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  refresh() {
    this.loadAllUsers();
  }

  loadAllUsers() {
    this.userListService.getAllNeoUsers()
      .then(users => {
        this.users = users;
      });
  }

  objectUpdated(eventObject) {
    this.userListService.updateNeoUser(eventObject.key)
    .then(response => {
      console.log('User has been updated');
      console.log(response);
    });
  }

  objectDeleted(eventObject) {
    this.userListService.deleteNeoUser(eventObject.key)
    .then(response => {
      console.log('user has been deleted')
    });
  }

  createNewObject(eventObject) {
    this.userListService.createNewNeoUser(eventObject.data)
      .then(response => {
        console.log('new user has been created');
        console.log(response);
      });
  }

}
