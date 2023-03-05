import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  private globalURL = 'http://localhost:8080/response/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) {

  }

  getResponse(phonenumber: String, prompt: String): Observable<String> {
    return this.http.get<String>(this.globalURL + phonenumber + "/" + prompt);
  }
}
