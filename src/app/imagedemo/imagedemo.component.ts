import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-imagedemo',
  templateUrl: './imagedemo.component.html',
  styleUrls: ['./imagedemo.component.css']
})
export class ImagedemoComponent implements OnInit {
  myForm: FormGroup;
  public selectedFile;
  public event1;
  imgURL: any;
  recivedImageData: any;
  base64Data: any;
  covertedImage: any;

  constructor(private service: DataService, private routes: ActivatedRoute) { }
  onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event1) => {
      this.imgURL = reader.result;
    }
  }
  ngOnInit() {
    this.myForm = new FormGroup(
      {
        un: new FormControl('', Validators.required),
        img: new FormControl('', Validators.required),
      }
    )
  }
  addimage() {
    const uploadData = new FormData();
    uploadData.append('img', this.selectedFile, this.selectedFile.name);

    // console.log(this.myForm.value.img);
    this.service.addimageservice(this.myForm.value).subscribe(res => {
      console.log(res);
      this.recivedImageData = res;
      this.base64Data = this.recivedImageData.pic;
      this.covertedImage = 'data:image/jpeg;base64,' + this.base64Data;
    },
      err => console.log('Error Occured duringng saving: ' + err)
    );
  }
}
