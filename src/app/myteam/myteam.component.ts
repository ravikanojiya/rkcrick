import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-myteam',
  templateUrl: './myteam.component.html',
  styleUrls: ['./myteam.component.css']
})
export class MyteamComponent implements OnInit {
  tourlist: {};
  tid = 0;
  teamlist: {};
  teamlistB: {};
  playerlist: {};
  playerlistB: {};
  myForm: FormGroup;
  constructor(private service: DataService, private route: ActivatedRoute,private messageService:MessageService) { }

 async ngOnInit() {
  this.tid = this.route.snapshot.params.id;
  this.service.getturnamentbyid(this.tid).then(res => {
    this.tourlist = res;
    console.log(res);
  });
  this.service.getteambyid(this.tid).then(res => {
    this.teamlist = res;
  });
  this.service.getteambyid(this.tid).then(res => {
    this.teamlistB = res;
  });  
  this.myForm = new FormGroup({
    id: new FormControl(this.tid),
    tid1: new FormControl('', Validators.required),
    tid2: new FormControl('', Validators.required),
    over: new FormControl('', Validators.required),
    match_date: new FormControl('', Validators.required),
    match_place: new FormControl('', Validators.required),
    tosswinteam_id: new FormControl('', Validators.required),
    tossselection: new FormControl('', Validators.required),
    captainteam1: new FormControl('', Validators.required),
    captainteam2: new FormControl('', Validators.required),
  });
   
     
  }
  savematch() {
    this.messageService.add({severity:'success', summary:'New Match', detail:'Match created.. '});

    this.service.addmatch(this.myForm.value).subscribe(res => {
      console.log(res);
    });
  }
  getplayerA(value) {
    console.log(value);
    this.service.getplayerbyid(value).then(res => {
      this.playerlist = res;
    });
  }
  getplayerB(value) {
    console.log(value);
    this.service.getplayerbyid(value).then(res => {
      this.playerlistB = res;
    })
  }
 
}
