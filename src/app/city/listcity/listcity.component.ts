import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-listcity',
  templateUrl: './listcity.component.html',
  styleUrls: ['./listcity.component.css']
})
export class ListcityComponent implements OnInit {
  list: {};
  constructor(private service: DataService) { }

  async ngOnInit() {
    await this.service.getallcity().then(res => {
      this.list = res;
    })
  }

}
