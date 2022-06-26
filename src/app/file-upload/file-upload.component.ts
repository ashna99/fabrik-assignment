import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  response: any ="waiting";
  constructor(private fileUploadService: FileUploadService) {}
  

  ngOnInit(): void {
  }
  onFileSelected(event : any): void {
    const file:File = event.target.files[0];
    if(file){
      console.log(file);
      const uploadResponse = this.fileUploadService.uploadFile(file);
      uploadResponse.subscribe((event) => {
        console.log(event);
        this.response=event;
      }, (error) => {
        console.log(error);
        this.response=error;
      })
    }
  }
}
