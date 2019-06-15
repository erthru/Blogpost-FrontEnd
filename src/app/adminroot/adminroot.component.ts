import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-adminroot',
  templateUrl: './adminroot.component.html',
  styleUrls: ['./adminroot.component.scss']
})
export class AdminrootComponent implements OnInit {

  author = "";

  constructor(private router: Router, private api:ApiserviceService) { }

  ngOnInit() {
    if(!localStorage.getItem("id"))
      this.router.navigateByUrl("/login")

    this.api.getAdminDetail(localStorage.getItem("id")).subscribe(res=>{
      this.author = res["data"]["firstName"]+" "+res["data"]["lastName"];
    });
  }

}
