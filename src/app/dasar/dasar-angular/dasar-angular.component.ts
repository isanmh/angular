import { Component } from '@angular/core';

@Component({
  selector: 'app-dasar',
  templateUrl: './dasar-angular.component.html',
  styleUrls: ['./dasar-angular.component.scss'],
})
export class DasarAngularComponent {
  judul = 'Fullstack Angular Laravel';
  training = 'Inixindo Bandung';

  getNama() {
    alert(this.judul);
  }
  getJudul(judul: string) {
    alert(judul);
  }
}
