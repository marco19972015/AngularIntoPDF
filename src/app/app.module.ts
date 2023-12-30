import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import { IntoPdfComponent } from './into-pdf/into-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    IntoPdfComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
