import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mymatch',
  templateUrl: './mymatch.component.html',
  styleUrls: ['./mymatch.component.css']
})
export class MymatchComponent implements OnInit {
mlist:{}
plist:{}
plist1:{}
id=0;
  constructor(private service:DataService,private route:ActivatedRoute) { }

 async ngOnInit() {
  this.id = this.route.snapshot.params.id;
    await   this.service.getmatchById(this.id).then(res => {
      this.mlist = res;
      console.log("malist"+this.mlist[0])

    });
    await  this.service.getplayerBymatch(this.mlist[0].tid).then(res => {
      this.plist = res;
    });

  await  this.service.getplayerBymatch1(this.id).then(res => {
      this.plist1 = res;
      console.log("t1"+res);
    });
  }

}
