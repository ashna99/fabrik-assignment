import { Component, OnInit } from '@angular/core';
import { FilesListService } from "../services/files-list.service"
import { File } from "../models/file";


@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
  page = 1;
  totalFiles: number=0;
  filesPerPage: number= 2;
  files: File[]=[];

  constructor(private filesListService: FilesListService) { }

  ngOnInit(): void {
    this.filesListService.getFiles()
    .subscribe((res:any)=>{
      this.files= res.data;
      this.totalFiles= this.files.length;
    })
  }

}
