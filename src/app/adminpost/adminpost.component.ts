import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-adminpost',
  templateUrl: './adminpost.component.html',
  styleUrls: ['./adminpost.component.scss']
})
export class AdminpostComponent implements OnInit {

  posts = [];
  page = 0;
  baseImgUrl = this.api.baseUrl + "uploads/";
  totalPages = 0;
  paginationHidden = true;
  pagePrevClass = "page-item disabled";
  pageNextClass = "page-item disabled";
  txSearch = "";

  constructor(private api: ApiserviceService) { }

  ngOnInit() {
    this.loadPosts("next");
  }

  loadPosts(mode: String) {
    this.paginationHidden = false

    if (mode == "next")
      this.page += 1;
    else
      this.page -= 1;

    this.api.getPosts(this.page).subscribe(res => {
      this.posts = res["data"]["content"];
      this.totalPages = res["data"]["totalPages"];
      console.log(this.posts);

      if (this.page == 1) {
        this.pagePrevClass = "page-item disabled";
      } else {
        this.pagePrevClass = "page-item";
      }

      if (this.page == this.totalPages) {
        this.pageNextClass = "page-item disabled";
      } else {
        this.pageNextClass = "page-item";
      }
    });
  }

  search() {
    if (!this.txSearch) {
      this.page = 0;
      this.loadPosts("next")
    } else {
      this.paginationHidden = true;

      this.api.searchPosts(this.txSearch).subscribe(res => {
        this.posts = res["data"];
      });
    }
  }

}
