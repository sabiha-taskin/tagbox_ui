import { Component, OnInit } from '@angular/core';
import { UiMenuService } from './ui-menu.service';
import { UiMenu } from './ui-menu';
declare var $: any;
@Component({
  selector: 'app-ui-menu',
  templateUrl: './ui-menu.component.html',
  styleUrls: ['./ui-menu.component.css']
})
export class UiMenuComponent implements OnInit {

    menuItems: UiMenu[];
    popupVisible = false;
    okButtonOptions = {};
    cancelButtonOptions = {};
    popupType: string;
    title: string;

    MENU_ID: string;
    MENU_NAME: string;
    UI_PATH: string;
    MENU_TYPE: string;
    HEADER_NAME: string;
    MENU_ACTIVE: boolean;
    MENU_ICON: string;
    REDIRECT_URL: string;
    MENU_ORDER: number;


    constructor(private menuService: UiMenuService) { }

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
      this.okButtonOptions = {
        text: 'Save',
        type: 'normal',
        onClick: function (e) {
        }
      }
     this.cancelButtonOptions = {
        text: 'Cancel',
        type: 'normal'
    };
      this.loadAllMenus();
    }

    refresh() {
      this.loadAllMenus();
    }

    loadAllMenus() {
      this.menuService.getAllUiMenus()
        .then(menuItems => {
          this.menuItems = menuItems;
        });
    }

    objectUpdated(eventObject) {
      this.menuService.updateUiMenu(eventObject.key)
      .then(response => {
        console.log('Object has been updated');
        console.log(response);
      });
    }

    objectDeleted(eventObject) {
      this.menuService.deleteUiMenu(eventObject.key)
      .then(response => {
        console.log('object has been deleted ');
      });
    }

    createNewObject(eventObject) {
      eventObject.data.MENU_TYPE = 'HEADER' ;
     if (eventObject.data.REDIRECT_URL === undefined || eventObject.data.REDIRECT_URL === '') {
        eventObject.data.REDIRECT_URL = 'NA'
      }
      eventObject.data.HEADER_NAME = 'NA'

      this.menuService.createNewUiMenu(eventObject.data)
        .then(response => {
          console.log(response);
        });
    }

    craeteMenu(value, type) {
      this.popupType = type;
      if (type === 'edit') {
        this.title = 'Edit ' + value.MENU_NAME;
        this.HEADER_NAME = value.HEADER_NAME;
        this.MENU_ID = value.MENU_ID;
        this.MENU_ACTIVE = value.MENU_ACTIVE;
        this.MENU_NAME = value.MENU_NAME
        this.MENU_TYPE = value.MENU_TYPE
        this.UI_PATH = value.UI_PATH
        this.MENU_ICON = value.MENU_ICON
        this.REDIRECT_URL = value.REDIRECT_URL
        this.MENU_ORDER = value.MENU_ORDER
      } else {
        if (type === 'HEADER') {
          this.setDefault();
          this.title = 'Adding Menu';
          this.HEADER_NAME = 'NA';
        } else {
        this.setDefault();
        this.title = 'Adding Sub Menu for ' + value.MENU_ID;
        this.HEADER_NAME = value.MENU_ID }
        this.MENU_TYPE = type;
      }
      this.popupVisible = true;
    }

    closePopup() {
      this.setDefault();
      this.popupVisible = false;
      this.popupType = undefined;
    }

    savePage() {
      $('#saveBtn .dx-button-text').html('Saving...');
      if ( this.MENU_ID === undefined || this.MENU_ID === '' || this.MENU_NAME === undefined
      || this.MENU_NAME === '' || this.UI_PATH === '' || this.UI_PATH === '' || this.MENU_ICON === undefined
      || this.MENU_ICON === undefined ) {
        $('#errorMsg').html('Menu ID, Menu Name, UI Path and Icon are Mandatory.');
        $('#saveBtn .dx-button-text').html('Save');
        return false;
      }
     const addMenuObject = {
        MENU_ID: this.MENU_ID,
        MENU_NAME: this.MENU_NAME,
        UI_PATH: this.UI_PATH,
        MENU_TYPE: this.MENU_TYPE,
        HEADER_NAME: this.HEADER_NAME,
        MENU_ACTIVE: this.MENU_ACTIVE,
        MENU_ICON: this.MENU_ICON,
        MENU_ORDER: this.MENU_ORDER,
        REDIRECT_URL: (this.REDIRECT_URL === undefined || this.REDIRECT_URL === '') ? 'NA' : this.REDIRECT_URL
      }
      $('#errorMsg').html('');
      if (this.popupType === 'HEADER' || this.popupType === 'PAGE') {
          this.menuService.createNewUiMenu(addMenuObject)
          .then(response => {
            this.setDefault();
            this.popupVisible = false;
            $('#saveBtn .dx-button-text').html('Save');
            this.loadAllMenus();
          });
        }
     if (this.popupType === 'edit') {
        this.menuService.updateUiMenu({
          MENU_ID: this.MENU_ID,
          MENU_NAME: this.MENU_NAME,
          UI_PATH: this.UI_PATH,
          MENU_TYPE: this.MENU_TYPE,
          HEADER_NAME: this.HEADER_NAME,
          MENU_ACTIVE: this.MENU_ACTIVE,
          MENU_ICON: this.MENU_ICON,
          MENU_ORDER: this.MENU_ORDER,
          REDIRECT_URL: (this.REDIRECT_URL === undefined || this.REDIRECT_URL === '') ? 'NA' : this.REDIRECT_URL
        })
        .then(response => {
          console.log('Object has been updated');
          console.log(response);
          this.setDefault();
          this.popupVisible = false;
          $('#saveBtn .dx-button-text').html('Save');
          this.loadAllMenus();
        });
      }
    }
    setDefault() {
      this.MENU_ID = undefined;
      this.MENU_NAME = undefined;
      this.UI_PATH = undefined;
      this.MENU_TYPE = undefined;
      this.HEADER_NAME = undefined;
      this.MENU_ACTIVE = undefined;
      this.MENU_ICON = undefined;
      this.REDIRECT_URL = undefined;
      this.MENU_ORDER = undefined;
    }
}
