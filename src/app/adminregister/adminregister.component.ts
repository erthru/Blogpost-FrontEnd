import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.scss']
})
export class AdminregisterComponent implements OnInit {

  txFirstName = "";
  txLastName = "";
  txEmail = "";
  txPassword = "";
  txPasswordRe = "";

  constructor(private router:Router, private api:ApiserviceService) { }

  ngOnInit() {
    if (localStorage.getItem("id"))
      this.router.navigateByUrl("/admin/post");
  }

  register(){
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
      this.api.registerAdmin(formData).subscribe(res=>{
        console.log(res);
        if(!res["data"]){
          swal.fire("Oops","Email exist");
        }else{
          this.router.navigateByUrl("/login");
        }
      },e=>{
        console.log(e);
      });
    }
  }

}
