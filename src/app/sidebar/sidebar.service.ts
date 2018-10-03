import { Injectable, Output, EventEmitter } from '@angular/core'
import { version } from 'd3';

@Injectable({ providedIn: 'root' })
export class SidebarService {

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggle(menuId, menuPath) {
    this.change.emit(menuId);
  }
}