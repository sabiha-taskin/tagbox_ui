import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-progress-bar',
    template : `
    <mat-progress-bar *ngIf="hideAndShow" class="progressbar-margin" mode="indeterminate"> </mat-progress-bar>
    <div *ngIf="!hideAndShow" style="height: 3px;"></div>
    `
})

export class ProgressbarComponent {
    @Input() hideAndShow: boolean;
}
