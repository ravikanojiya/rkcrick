import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-addplayers',
  templateUrl: './addplayers.component.html',
  styleUrls: ['./addplayers.component.css']
})
export class AddplayersComponent implements OnInit {
  list: {};
  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getrole().then(res => {
      this.list = res;
    })
  }

}
