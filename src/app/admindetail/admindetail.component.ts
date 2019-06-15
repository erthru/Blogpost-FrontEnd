import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admindetail',
  templateUrl: './admindetail.component.html',
  styleUrls: ['./admindetail.component.scss']
})
export class AdmindetailComponent implements OnInit {

  txFirstName = "";
  txLastName = "";
  txEmail = "";
  txPassword = "";
  txPasswordRe = "";

  constructor(private router:Router, private api:ApiserviceService) { }

  ngOnInit() {
    this.show();
  }

  show(){
    this.api.getAdminDetail(localStorage.getItem("id")).subscribe(res=>{
      this.txFirstName = res["data"]["firstName"];
      this.txLastName = res["data"]["lastName"];
      this.txEmail = res["data"]["email"];
      this.txPassword = res["data"]["password"];
      this.txPasswordRe = res["data"]["password"];
    });
  }

  submit(){
    if(!this.txFirstName || !this.txLastName || !this.txEmail || !this.txPassword || !this.txPasswordRe){
      swal.fire("Oops","Fill the required field");
    }else if(this.txPassword != this.txPasswordRe){
      swal.fire("Oops","Password not match");
      this.txPassword = "";
      this.txPasswordRe = "";
    }else{
      let formData = new FormData();
      formData.append("firstName",this.txFirstName);
      formData.append("lastName",this.txLastName);
      formData.append("email",this.txEmail);
      formData.append("password",this.txPassword);
      this.api.updateAdminDetail(formData).subscribe(res=>{
        console.log(res);
        if(!res["data"]){
          swal.fire("Oops","Email exist");
        }else{
          this.router.navigateByUrl("/admin/post");
        }
      },e=>{
        console.log(e);
      });
    }
  }

}
