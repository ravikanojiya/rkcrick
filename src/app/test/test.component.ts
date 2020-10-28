import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  myForm: FormGroup;
  list: {};
  ulist = 0;
  constructor(private service: DataService, private route: Router) { }

  async ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required)
    })
    await this.service.getalluser().then(res => {
      this.list = res;
      console.log("aaaa" + res);
      // this.route.navigate(['/test']);
    });
  }

  submit() {
    this.service.addUser(this.myForm.value).subscribe(res => {
      console.log(res);
    });
  }
  delete(value) {
    console.log(value)
    this.service.deleteuser(value).subscribe(res => {
      // this.ulist = this.ulist.filter(i => i.id != value);
      console.log("res deleted...");
    })
  }
}
