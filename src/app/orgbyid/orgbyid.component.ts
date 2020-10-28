import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orgbyid',
  templateUrl: './orgbyid.component.html',
  styleUrls: ['./orgbyid.component.css']
})
export class OrgbyidComponent implements OnInit {
getlist=[];
id=0;
  constructor(private service:DataService,private route:ActivatedRoute) { }

 async ngOnInit() {
    console.log(this.route);
    this.id=this.route.snapshot.params.id;
    console.log(this.id);
   await this.service.getorgbyidservice(this.id).then(res=>{
      this.getlist=res;
    })
  }

}
