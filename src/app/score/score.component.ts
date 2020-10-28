import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  id = 0;
  mlist: {};
  plist: {};
  plist1: {};

  constructor(private service: DataService, private route: ActivatedRoute,private ru:Router) { }

 async ngOnInit() {
    console.log(this.route)
    this.id = this.route.snapshot.params.id;
    console.log("aaaa" + this.id);
   
    await   this.service.getmatchById(this.id).then(res => {
      this.mlist = res;
    });
    await  this.service.getplayerBymatch(this.id).then(res => {
      this.plist = res;
    });

  await  this.service.getplayerBymatch1(this.id).then(res => {
      this.plist1 = res;
      console.log("t1"+res);
    });
  }

}
