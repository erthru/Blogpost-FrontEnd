import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

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

  constructor(private api: ApiserviceService, private route:Router) { }

  ngOnInit() {
    this.loadPosts("next");
  }

  loadPosts(mode: String) {
    this.paginationHidden = false

    if (mode == "next")
      this.page += 1;
    else if (mode == "prev")
      this.page -= 1;

    this.api.getAuthorPosts(localStorage.getItem("id"),this.page).subscribe(res => {
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

      this.api.searchAuthorPosts(localStorage.getItem("id"),this.txSearch).subscribe(res => {
        this.posts = res["data"];
      });
    }
  }

  deletePost(id:String){
    swal.fire({
      title: "Confirmation",
      text: "Delete this post ?",
      type: "warning",
      confirmButtonText: "Delete",
      showCancelButton: true,
      cancelButtonText: "Cancel"
    }).then(willDelete=>{
      if(willDelete.value){
        this.api.deletePost(id).subscribe(res=>{
          this.loadPosts(null);
        });
      }
    });
  }

}
