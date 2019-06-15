import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-maincontentpost',
  templateUrl: './maincontentpost.component.html',
  styleUrls: ['./maincontentpost.component.scss']
})
export class MaincontentpostComponent implements OnInit {

  constructor(private api: ApiserviceService) { }

  page = 0;
  allDataLoaded = false;
  posts = [];
  imgBaseUrl = this.api.baseUrl + "uploads/";

  ngOnInit() {
    this.loadPosts();
    this.checkScroll();
  }

  loadPosts() {
    if (!this.allDataLoaded) {
      this.page += 1
      this.api.getPosts(this.page).subscribe(res => {
        if (res["data"]["content"].length > 0) {
          for (let i = 0; i < res["data"]["content"].length; i++) {
            this.posts.push(res["data"]["content"][i]);
          }
        } else {
          this.page -= 1;
          console.log("all data loaded");
          this.allDataLoaded = true;
        }
      });
    }
  }

  checkScroll() {
    window.onscroll = () => {
      let bottomOfWindow =
        Math.max(
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop
        ) +
        window.innerHeight ===
        document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        this.loadPosts();
        console.log("reached the bottom");
      }
    };
  }

}
