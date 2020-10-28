import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editplayer',
  templateUrl: './editplayer.component.html',
  styleUrls: ['./editplayer.component.css']
})
export class EditplayerComponent implements OnInit {
  playerid = 0;
  myForm: FormGroup;
  player = {};
  tid = 0;
  playerlist: {};
  constructor(private route: ActivatedRoute, private service: DataService) { }

  async ngOnInit() {

    this.playerid = this.route.snapshot.params.id;
    // this.tid=this.route.snapshot.params.tid;
    console.log("Playerid" + this.playerid);
    // console.log("temaid"+this.tid);

    await this.service.getplayerUpdate(this.playerid).then(res => {
      this.player = res;
      console.log(this.player);
    });
    await this.service.getplayerbyid(this.player[0].tid).then(res => {
      this.playerlist = res;
      console.log("pllist"+this.playerlist)

    });
    this.myForm = new FormGroup({
      tid: new FormControl(this.player[0].tid, Validators.required),
      pid: new FormControl(this.player[0].pid, Validators.required),
      player_name: new FormControl(this.player[0].player_name, Validators.required),
      player_id: new FormControl(this.player[0].player_id, Validators.required),
      mobile: new FormControl(this.player[0].mobile, Validators.required)
    });
  }
  submit() {
    this.service.updateplayer(this.myForm.value).subscribe(res => {
      console.log(res);
    })
  }

}
