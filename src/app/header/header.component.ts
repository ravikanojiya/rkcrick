import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
matchlist:{}
  constructor(private service:DataService) { }

  ngOnInit() {
    this.service.getallmatch().then(res=>{
      this.matchlist=res;
      console.log("aaaa" + res);
    })
  }

}
