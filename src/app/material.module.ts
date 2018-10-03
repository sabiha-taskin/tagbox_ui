import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatProgressBarModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule, MatSelectModule, MatInputModule, MatCheckboxModule, MatButtonModule,
    MatButtonToggleModule, MatTabsModule, MatSlideToggleModule, MatStepperModule, MatDialogModule } from '@angular/material';

import {MatAutocompleteModule} from '@angular/material/autocomplete';

// import { ConfirmDialogComponent } from './dialog/confirm-dialog.component';
// import { DialogsService } from './dialog/confirm-dialog.service';

@NgModule({
    imports : [
        MatProgressBarModule,
        MatSidenavModule,
        MatIconModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatTabsModule,
        MatSlideToggleModule,
        MatStepperModule,
        MatDialogModule
    ],
    exports : [
        MatProgressBarModule,
        MatSidenavModule,
        MatIconModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatTabsModule,
        MatSlideToggleModule,
        MatStepperModule,
        MatDialogModule,
        // ConfirmDialogComponent
    ],
    declarations: [],
    entryComponents : [],
    providers : []
})

export class MaterialModule { }
