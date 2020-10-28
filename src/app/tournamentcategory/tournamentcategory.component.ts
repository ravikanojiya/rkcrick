import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tournamentcategory',
  templateUrl: './tournamentcategory.component.html',
  styleUrls: ['./tournamentcategory.component.css']
})
export class TournamentcategoryComponent implements OnInit {
  myForm: FormGroup;
  
  constructor(private service: DataService) { }

  async ngOnInit() {
    this.myForm = new FormGroup({
      cat_name: new FormControl('', Validators.required)
    });
  }
  addcategory() {
    this.service.addcat(this.myForm.value).subscribe(res => {
      console.log(res);
    })
  }

}
