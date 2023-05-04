import { Component } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactsService } from 'src/app/services/contacts-api/contacts.service';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.scss'],
})
export class ListContactsComponent {
  contacts: any = {};

  constructor(private cs: ContactsService) {}

  ngOnInit(): void {
    this.getDataContacts();
  }

  // ambil data
  getDataContacts() {
    this.cs.selectData().subscribe((res) => {
      console.log(res);
      this.contacts = res;
    });
  }

  destroyData(id: Contact) {
    this.cs.deleteData(id).subscribe(() => {
      alert('Data berhasil dihapus');
      this.getDataContacts();
    });
  }
}
