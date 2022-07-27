import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { File } from "../models/file";


@Injectable({
  providedIn: 'root'
})
export class FilesListService {
  private baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  getFiles( ){
    return this.http.get(this.baseUrl + 'api/files/' );
  }

}
