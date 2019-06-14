import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import swal from 'sweetalert2';

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

  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit() {
    this.show();
  }

  show(){
    this.http.get(environment.api+"author/"+localStorage.getItem("id")).subscribe(res=>{
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
      this.http.put(environment.api+"author/"+localStorage.getItem("id"),formData).subscribe(res=>{
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
