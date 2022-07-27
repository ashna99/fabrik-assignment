import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ListFilterPipe } from './pipes/listFilterPipe';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileUploadService } from './services/file-upload.service';



@NgModule({
  declarations: [
    AppComponent,
    ListFilterPipe,
    FileUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
 
  providers: [
    FileUploadService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
