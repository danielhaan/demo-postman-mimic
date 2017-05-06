import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { KeyValueFormComponent } from './components/key-value-form/key-value-form.component';
import { JsonOutputComponent } from './components/json-output/json-output.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyValueFormComponent,
    JsonOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
