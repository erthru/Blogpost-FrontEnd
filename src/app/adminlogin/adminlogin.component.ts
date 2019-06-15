import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  txEmail = "";
  txPassword = "";

  constructor(private router: Router, private api: ApiserviceService) { }

  ngOnInit() {
    if (localStorage.getItem("id"))
      this.router.navigateByUrl("/admin/post");
  }

  auth() {
    if (!this.txEmail || !this.txPassword) {
      swal.fire("Oops", "Fill the form");
    } else {
      let formData = new FormData();
      formData.append("email", this.txEmail);
      formData.append("password", this.txPassword);
      this.api.loginAdmin(formData).subscribe(res => {
        console.log(res);
        if(!res["data"]){
          swal.fire("Oops","Login failed. Check email or password");
        }else{
          localStorage.setItem("id",res["data"]["id"]);
          this.router.navigateByUrl("/admin/post");
        }
      }, error => {
        console.log(error);
      });
    }
  }

}
