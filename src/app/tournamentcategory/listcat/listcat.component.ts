import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-listcat',
  templateUrl: './listcat.component.html',
  styleUrls: ['./listcat.component.css']
})
export class ListcatComponent implements OnInit {
  list: {};
  constructor(private service: DataService) { }

  async ngOnInit() {
    await this.service.getcategory().then(res => {
      this.list = res;
    });
  }

}
