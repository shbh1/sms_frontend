import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }
  saveRecord(data) {
    return this.http.post(`${this.apiUrl}/create`, data);
  }
  getRecords() {
    return this.http.get(`${this.apiUrl}/get`);
  }
  updateRecord(id, data) {
    return this.http.put(`${this.apiUrl}/update/${id}`, data);
  }
  getRecord(id) {
    return this.http.get(`${this.apiUrl}/get/${id}`);
  }
  deleteRecord(id) {
    return this.http.delete(`${this.apiUrl}/remove/${id}`);
  }
}
