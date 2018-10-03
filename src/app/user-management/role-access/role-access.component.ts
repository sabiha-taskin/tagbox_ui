import { UtilityService } from '../../services/utility.service';
import { forEach } from '@angular/router/src/utils/collection';
import { UiMenuService } from '../ui-menu/ui-menu.service';
import { UiMenu } from '../ui-menu/ui-menu';
import { RoleAccessService } from './role-access.service';
import { RoleAccess } from './role-access';
import { DxListComponent, DxDataGridComponent } from 'devextreme-angular';
import { ViewChild, OnInit, Component } from '@angular/core';
import { element } from 'protractor';
import { MenuTree } from './menu-tree';
declare var $: any;
@Component({
  selector: 'app-role-access',
  templateUrl: './role-access.component.html',
  styleUrls: ['./role-access.component.css']
})
export class RoleAccessComponent implements OnInit {

  roles: RoleAccess[];
  roleAccessSelected: RoleAccess;
  uiMenus: UiMenu[];
  uiMenuList: string[] = [];
  selectedItems: any[] = [];
  uiMenuToggleList: MenuTree[] = [];
  starSelected: boolean;
  selectedAccess: string[] = [];
  isReadOnly = true;

  @ViewChild(DxListComponent) list: DxListComponent;
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;

  objectSelectionEvent(event) {
    this.roleAccessSelected = this.dataGrid.instance.getSelectedRowsData()[0];
    // code to parse the process configured converted to string array
    if ( !this.roleAccessSelected.ACCESS ) {
      this.roleAccessSelected.ACCESS = [];
    } else if ( typeof this.roleAccessSelected.ACCESS === 'string' ) {
        this.roleAccessSelected.ACCESS = this.utilityService.parseStringtoArray(this.roleAccessSelected.ACCESS);
    } else {
        this.roleAccessSelected.ACCESS = this.utilityService.trimSpaceChars(this.roleAccessSelected.ACCESS);
    }

    if ( this.list ) {
      this.selectedItems = this.list.instance.option('selectedItemKeys');

      while ( this.selectedItems.length !== 0 ) {
        this.selectedItems.pop();
      }

      this.roleAccessSelected.ACCESS.forEach(element => {
        this.selectedItems.push(element);
      })

      this.list.instance.option('selectedItemKeys', this.selectedItems);
    }
    this.isReadOnly = true;
    this.uiMenuToggleList.splice(0, this.uiMenuToggleList.length);
    this.starSelected = event.data.ACCESS.indexOf('*') >= 0 ;
    this.menuListUpdateByToggle(event.data.ACCESS);

  }

  constructor(private roleAccessService: RoleAccessService, private uiMenuService: UiMenuService,
  private utilityService: UtilityService) {
    // this.uiMenuService.getAllUiMenus()
    // .then(uiMenus => {
    //   this.uiMenus = uiMenus;
    //   uiMenus.forEach(element => {
    //     this.uiMenuList.push(element.MENU_ID);
    //   });
    // });
  }

  menuListUpdateByToggle(selectedMenus) {
    this.uiMenus.forEach( object => {
        if (object.MENU_TYPE === 'HEADER') {
            const menuObject: MenuTree = {
              'NAME' : object.MENU_ID,
              'SELECTED' : selectedMenus.indexOf(object.MENU_ID) >= 0 ? true : false,
              'SUBMENU' : []
            }
            const pages: MenuTree[] = [];
            this.uiMenus.filter( element => element.HEADER_NAME === object.MENU_ID).forEach(list => {
              pages.push({
                'NAME' : list.MENU_ID,
                'SELECTED' : selectedMenus.indexOf(list.MENU_ID) >= 0 ? true : false,
                'SUBMENU' : []
              })
            })
            menuObject.SUBMENU = pages;
            this.uiMenuToggleList.push(menuObject);
        }
    })

  this.uiMenuToggleList.sort((a: any, b: any) => {
    if (a.SUBMENU.length < b.SUBMENU.length) {
      return -1;
    } else if (a.SUBMENU.length > b.SUBMENU.length) {
      return 1;
    } else {
      return 0;
    }
  });
}

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
    this.loadAllMenus();
  }

  refresh() {
    this.loadAllMenus();
  }

  save() {
    // if ( this.list ) {
     // this.selectedItems = this.selectedAccess
     this.checkedAccess() ;
      this.roleAccessSelected.ACCESS = this.selectedAccess;
    // }
    this.roleAccessService.updateRoleAccess(this.roleAccessSelected)
      .then(response => {
        console.log('Object has been updated');
        console.log(response);
        this.uiMenuToggleList.splice(0, this.uiMenuToggleList.length);
        this.selectedAccess.splice(0, this.selectedAccess.length);
        this.loadAllMenus();
        this.roleAccessSelected = undefined;
      });
  }

  loadAllMenus() {
    this.roleAccessService.getAllRoleAccesss()
      .then(roles => {
        this.roles = roles;
        this.roles.forEach(role => {
          if (role.ACCESS !== undefined) {
            role.ACCESS = this.utilityService.parseStringtoArray(role.ACCESS.toString());
          }
        });
        if ( roles.length > 0 ) {
          // this.roleAccessSelected = roles[0];
          this.uiMenuService.getAllUiMenus()
          .then(uiMenus => {
            this.uiMenus = uiMenus;
            uiMenus.forEach(element => {
              this.uiMenuList.push(element.MENU_ID);
            });
            // this.starSelected = this.roleAccessSelected.ACCESS.indexOf('*') >= 0 ;
            // this.menuListUpdateByToggle(this.roleAccessSelected.ACCESS);
          });
        }
      });
  }

  objectUpdated(eventObject) {
    this.roleAccessService.updateRoleAccess(eventObject.key)
    .then(response => {
      console.log('Object has been updated');
      console.log(response);
    });
  }

  objectDeleted(eventObject) {
    this.roleAccessService.deleteRoleAccess(eventObject.key)
    .then(response => {
      console.log('object has been deleted ');
      this.loadAllMenus();
        this.roleAccessSelected = undefined;
    });
  }

  createNewObject(eventObject) {
    this.roleAccessService.createNewRoleAccess(eventObject.data)
      .then(response => {
        console.log(response);
      });
  }

  // selectAll() {
  //   this.uiMenuToggleList.splice(0, this.uiMenuToggleList.length);
  //   if (this.starSelected) {
  //     this.menuListUpdateByToggle(['*']);
  //   } else {
  //     this.menuListUpdateByToggle([]);
  //   }
  // }

  checkedAccess() {
    if (this.starSelected) {
      this.selectedAccess.push('*');
    }
    this.uiMenuToggleList.forEach(menu => {
      if (menu.SELECTED) {
        this.selectedAccess.push(menu.NAME);
      }
      menu.SUBMENU.forEach ( subMenu => {
        if (subMenu.SELECTED) {
          this.selectedAccess.push(subMenu.NAME);
        }
      })
  })
  }

  toggleEdit() {
    this.isReadOnly = !this.isReadOnly;
  }

}
