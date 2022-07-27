import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ListFilterPipe } from './pipes/listFilterPipe';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ListFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
