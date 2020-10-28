import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addteams',
  templateUrl: './addteams.component.html',
  styleUrls: ['./addteams.component.css']
})
export class AddteamsComponent implements OnInit {
  myForm: FormGroup;
  cityname: {}
  tourid = 0;
  constructor(private service: DataService, private route: ActivatedRoute) { }

  async ngOnInit() {
    this.tourid = this.route.snapshot.params.id;
    console.log(this.tourid)
   
    this.myForm = new FormGroup({
      team_name: new FormControl('', Validators.required),
      city_id: new FormControl('', Validators.required),
      id: new FormControl(this.tourid)
    })
    await this.service.getallcity().then(res => {
      this.cityname = res;
    });
  }
  submit() {
    this.service.addteams(this.myForm.value).subscribe(res => {
      console.log(res);
    })
  }

}
