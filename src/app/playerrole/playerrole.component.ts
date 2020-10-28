import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-playerrole',
  templateUrl: './playerrole.component.html',
  styleUrls: ['./playerrole.component.css']
})
export class PlayerroleComponent implements OnInit {
  myForm: FormGroup;
  constructor(private service: DataService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      prole: new FormControl('', Validators.required)
    });
  }
  addplayerRole() {
    this.service.addplayerrole(this.myForm.value).subscribe(res => {
      console.log(res);
    })
  }

}
