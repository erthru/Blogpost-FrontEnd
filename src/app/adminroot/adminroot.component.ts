import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-adminroot',
  templateUrl: './adminroot.component.html',
  styleUrls: ['./adminroot.component.scss']
})
export class AdminrootComponent implements OnInit {

  author = "";

  constructor(private router: Router, private http:HttpClient) { }

  ngOnInit() {
    if(!localStorage.getItem("id"))
      this.router.navigateByUrl("/login")

    this.http.get(environment.api+"author/"+localStorage.getItem("id")).subscribe(res=>{
      this.author = res["data"]["firstName"]+" "+res["data"]["lastName"];
    });
  }

}
