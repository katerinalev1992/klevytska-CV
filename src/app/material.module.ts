import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatDialogModule, MatSelectModule} from '@angular/material';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatTabsModule, MatListModule, MatRadioModule} from '@angular/material';
import {MatInputModule, MatProgressSpinnerModule, MatCardModule, MatMenuModule, MatIconModule, MatTooltipModule,
  MatProgressBarModule, MatExpansionModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    MatRadioModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSelectModule,
    MatExpansionModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    MatRadioModule,
    MatProgressBarModule,
    MatSelectModule,
    MatExpansionModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})

export class MaterialModule {

}
