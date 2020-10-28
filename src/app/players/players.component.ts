import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Message } from 'primeng/api/message';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  tid = 0;
  list: {};
  myForm: FormGroup;
  teamname: {};
  msgs: Message[] = [];
  constructor(private route: ActivatedRoute, private service: DataService, private rut: Router,
    private messageService:MessageService) { }

  ngOnInit() {
    this.service.getrole().then(res => {
      this.list = res;
    });
    this.tid = this.route.snapshot.params.id;
    console.log(this.tid);
    this.service.getteambyid(this.tid).then(res => {
      this.teamname = res[0].team_name;
      console.log(res);
    });
    this.myForm = new FormGroup({
      player_name: new FormControl('', Validators.required),
      tid: new FormControl(this.tid),
      player_id: new FormControl('-1', Validators.required),
      mobile: new FormControl('', Validators.required)
    });
  }
  submit() {
    // this.msgs = [];
    this.messageService.add({severity:'success', summary:'New Player', detail:'Player Added.. '});
    // this.msgs.push({severity:'success', summary:'New Player', detail:'Player Added.'});
    this.service.addplayer(this.myForm.value).subscribe(res => {
      console.log(res);     
    });
    this.rut.navigate(['/playerslist',this.tid]);
  }

}
