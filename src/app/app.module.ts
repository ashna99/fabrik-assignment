import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListFilterPipe } from './pipes/listFilterPipe';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileUploadService } from './services/file-upload.service';
import { FilesListService } from './services/files-list.service';
import { FileListComponent } from './file-list/file-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ListFilterPipe,
    FileUploadComponent,
    FileListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    FileUploadService,
    FilesListService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
