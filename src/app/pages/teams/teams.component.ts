import { Component } from '@angular/core';
import { TeamsService } from 'src/app/services/teams-api/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent {
  // var kosong untuk menampung data
  teams: any = {};

  constructor(private ts: TeamsService) {}

  ngOnInit(): void {
    this.show();
  }

  // panggil service untuk ambil data
  show() {
    this.ts.getTeams().subscribe((res) => {
      console.log(res);
      this.teams = res;
    });
  }
}
