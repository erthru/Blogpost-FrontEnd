import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-adminpostshow',
  templateUrl: './adminpostshow.component.html',
  styleUrls: ['./adminpostshow.component.scss']
})
export class AdminpostshowComponent implements OnInit {

  lbUpdatedAt = "";
  txTitle = "";
  txBody = "";
  imgThumbnail = "";
  imgThumbnailHidden = false;
  spinnerHidden = true;

  constructor(private api:ApiserviceService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.show();
  }

  show() {
    this.api.getPost(this.route.snapshot.paramMap.get("id")).subscribe(res => {
      this.txTitle = res["data"]["title"];
      this.txBody = res["data"]["body"];
      this.imgThumbnail = this.api.baseUrl + "uploads/" + res["data"]["thumbnail"];
      this.lbUpdatedAt = res["data"]["lastTouchAt"];
    });
  }

  updateThumbnail(file:File){
    this.spinnerHidden = false;
    this.imgThumbnailHidden = true;

    let formData = new FormData();
    formData.append("thumbnail",file);

    this.api.updatePostThumbnail(formData,this.route.snapshot.paramMap.get("id")).subscribe(res=>{
      this.imgThumbnail = this.api.baseUrl+"uploads/"+res["data"]["thumbnail"];
      this.spinnerHidden = true;
      this.imgThumbnailHidden = false;
    });
  }

  submit(){
    let formData = new FormData();
    formData.append("title",this.txTitle);
    formData.append("body",this.txBody);
    formData.append("authorId",localStorage.getItem("id"));

    this.api.updatePost(formData,this.route.snapshot.paramMap.get("id")).subscribe(res=>{
      this.router.navigateByUrl("/admin/post");
    });
  }

}
