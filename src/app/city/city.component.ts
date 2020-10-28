import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  myForm: FormGroup;
  constructor(private service: DataService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      city: new FormControl('', Validators.required)
    })

  }
  submit() {
    this.service.addcity(this.myForm.value).subscribe(res => {
      console.log(res);
    })
  }

}
