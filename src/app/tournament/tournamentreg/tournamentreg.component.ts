import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tournamentreg',
  templateUrl: './tournamentreg.component.html',
  styleUrls: ['./tournamentreg.component.css']
})
export class TournamentregComponent implements OnInit {
  list: {}
  myForm: FormGroup;
  citylist: {};
  constructor(private service: DataService, private route: Router) { }

  async ngOnInit() {
    this.myForm = new FormGroup({
      tname: new FormControl('', Validators.required),
      city_id: new FormControl('', Validators.required),
      orgname: new FormControl('', Validators.required),
      orgnumber: new FormControl('', Validators.required),
      tour_cat_id: new FormControl('', Validators.required),
      tour_type: new FormControl('', Validators.required),
      start_date: new FormControl('', Validators.required),
      end_date: new FormControl('', Validators.required),
      details: new FormControl('', Validators.required),
      over: new FormControl('', Validators.required),
      balltype: new FormControl('', Validators.required),
    });

    await this.service.getcategory().then(res => {
      this.list = res;
    })
    await this.service.getallcity().then(res => {
      this.citylist = res;
    })
  }

  submit() {
    this.service.addtournament(this.myForm.value).subscribe(res => {
      console.log(res);
    })
    this.route.navigate(['/teams']);

  }

}
