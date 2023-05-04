import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private http: HttpClient) {}

  // api global reqres.in
  URL = 'https://reqres.in/api/users';
  httpOptions: any;

  // fungsi untuk ambil data
  getTeams() {
    return this.http.get(this.URL, this.httpOptions);
  }
}
