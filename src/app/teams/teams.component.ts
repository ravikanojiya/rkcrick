import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  tournament: {};
  constructor(private service: DataService) { }

 async ngOnInit() {
    await this.service.gettournament().then(res => {
      this.tournament = res;
      console.log("asdasdfasdf"+res);
    })
  }

}
