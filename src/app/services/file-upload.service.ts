import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class FileUploadService {
    private baseUrl = 'http://localhost:3000/';
    constructor(private http: HttpClient) { }   
    uploadFile(file: any): Observable<any> {
        const formData = new FormData();
        formData.append('file', file, file.name);
        return this.http.post(this.baseUrl+'api/file-upload', formData);
    }
}
