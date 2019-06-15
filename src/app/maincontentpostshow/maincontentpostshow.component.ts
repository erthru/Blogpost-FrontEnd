import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maincontentpostshow',
  templateUrl: './maincontentpostshow.component.html',
  styleUrls: ['./maincontentpostshow.component.scss']
})
export class MaincontentpostshowComponent implements OnInit {

  lbTitle = "";
  lbBody = "";
  imgThumbnail = "";
  lbAuthor = "";
  lbUpdatedAt = "";
  imgBaseUrl = this.api.baseUrl + "uploads/";

  constructor(private api:ApiserviceService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.show();
  }

  show(){
    this.api.getPost(this.route.snapshot.paramMap.get("id")).subscribe(res=>{
      this.lbTitle = res["data"]["title"];
      this.lbBody = res["data"]["body"];
      this.imgThumbnail = res["data"]["thumbnail"];
      this.lbAuthor = res["data"]["author"]["firstName"]+" "+res["data"]["author"]["lastName"];
      this.lbUpdatedAt = res["data"]["lastTouchAt"];
    });
  }

}
