import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  uid = 0;
  list: User;
  myForm: FormGroup;
  constructor(private service: DataService, private rut: Router, private routes: ActivatedRoute) { }

  async  ngOnInit() {
    this.uid = this.routes.snapshot.params.id;
    console.log(this.uid)
    await this.service.getuserbyid(this.uid).then(res => {
      this.list = res;
      console.log(this.list[0]);
    });
    this.myForm = new FormGroup({
      id: new FormControl(this.list[0].id,Validators.required),
      name: new FormControl(this.list[0].name, Validators.required),
      mobile: new FormControl(this.list[0].mobile, Validators.required),
    });
  }
update(){
  console.log("ll",this.myForm.value)
  this.service.updateUser(this.myForm.value).subscribe(res=>{
    console.log(res);
    this.rut.navigate(['/test']);
  })
}
}
