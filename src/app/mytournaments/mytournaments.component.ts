import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mytournaments',
  templateUrl: './mytournaments.component.html',
  styleUrls: ['./mytournaments.component.css']
})
export class MytournamentsComponent implements OnInit {
  tournament: {};
  constructor(private service: DataService) { }

 async ngOnInit() {
    await this.service.gettournament().then(res => {
      this.tournament = res;
      console.log("asdasdfasdf"+res);
    })
  }
}
