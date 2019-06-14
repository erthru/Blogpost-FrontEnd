import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adminpostshow',
  templateUrl: './adminpostshow.component.html',
  styleUrls: ['./adminpostshow.component.scss']
})
export class AdminpostshowComponent implements OnInit {

  txTitle = "";
  txBody = "";
  imgThumbnail = "";
  imgThumbnailHidden = false;
  spinnerHidden = true;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.show();
  }

  show() {
    this.http.get(environment.api + "post/" + this.route.snapshot.paramMap.get("id")).subscribe(res => {
      this.txTitle = res["data"]["title"];
      this.txBody = res["data"]["body"];
      this.imgThumbnail = environment.api + "uploads/" + res["data"]["thumbnail"];
    });
  }

  updateThumbnail(file:File){
    this.spinnerHidden = false;
    this.imgThumbnailHidden = true;

    let formData = new FormData();
    formData.append("thumbnail",file);

    this.http.post(environment.api+"post/thumbnail/"+this.route.snapshot.paramMap.get("id"), formData).subscribe(res=>{
      this.imgThumbnail = environment.api+"uploads/"+res["data"]["thumbnail"];
      this.spinnerHidden = true;
      this.imgThumbnailHidden = false;
    });
  }

  submit(){
    let formData = new FormData();
    formData.append("title",this.txTitle);
    formData.append("body",this.txBody);
    formData.append("authorId",localStorage.getItem("id"));

    this.http.put(environment.api+"post/"+this.route.snapshot.paramMap.get("id"),formData).subscribe(res=>{
      this.router.navigateByUrl("/admin/post");
    });
  }

}
