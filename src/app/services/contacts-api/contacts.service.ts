import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private http: HttpClient) {}
  URL = 'http://127.0.0.1:8000/api/contacts';
  httpOptions: any = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // services crud resfull api dari laravel
  selectData() {
    return this.http.get(this.URL, this.httpOptions);
  }

  insertData(data: Contact) {
    // rubah data ke json
    let body = JSON.stringify(data);
    let h = { 'Content-Type': 'application/json' };
    return this.http.post(this.URL, body, { headers: h });
  }

  detailData(id: Contact) {
    // return this.http.get(`${this.URL}/${id}`, this.httpOptions);
    return this.http.get(this.URL + '/' + id, this.httpOptions);
  }

  updateData(id: Contact, data: Contact) {
    return this.http.put(this.URL + '/' + id, data, this.httpOptions);
  }

  deleteData(id: Contact) {
    return this.http.delete(this.URL + '/' + id, this.httpOptions);
  }
}
