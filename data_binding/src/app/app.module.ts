import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataBinderComponent } from './data-binder/data-binder.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBinderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
