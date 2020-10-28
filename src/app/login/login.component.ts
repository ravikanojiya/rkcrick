import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  lg: FormGroup;
  constructor(private service: DataService, private rut: Router, private ms: MessageService) { }

  ngOnInit() {
    this.lg = new FormGroup({
      orgname: new FormControl('', Validators.required),
      orgnumber: new FormControl('', Validators.required),
    });
  }
  login() {
    this.service.loginservice(this.lg.value).subscribe(res => {
      console.log(res);
      if (res['data'] != "") {
        
        sessionStorage.setItem("islogin", "true");
        console.log("login"+res.data[0].orgname);
        this.rut.navigate(['/orgbyid',res.data[0].id]);
      } else {
        this.ms.add({ severity: 'error', summary: 'Login', detail: 'Invalid Cradantial' });
        console.log('error');
      }
    })
  }

}
