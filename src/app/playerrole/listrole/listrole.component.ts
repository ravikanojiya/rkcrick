import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-listrole',
  templateUrl: './listrole.component.html',
  styleUrls: ['./listrole.component.css']
})
export class ListroleComponent implements OnInit {
  listrole: {};
  constructor(private service: DataService) { }

  async ngOnInit() {
    await this.service.getrole().then(res => {
      this.listrole = res;
    })
  }

}
