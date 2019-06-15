import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-adminpostcreate',
  templateUrl: './adminpostcreate.component.html',
  styleUrls: ['./adminpostcreate.component.scss']
})
export class AdminpostcreateComponent implements OnInit {

  txTitle = '';
  txBody = '';
  fileThumbnail = null;

  constructor(private api:ApiserviceService, private router:Router) { }

  ngOnInit() {
  }

  submit() {
    if (!this.txTitle || !this.txBody) {
      swal.fire('Oops..', 'Check required field');
    } else if (!this.fileThumbnail) {
      swal.fire('Oops..', 'Thumbnail required');
    } else {
      let formData = new FormData();
      formData.append("title", this.txTitle);
      formData.append("body", this.txBody);
      formData.append("thumbnail", this.fileThumbnail);
      formData.append("authorId",localStorage.getItem("id"));
      this.api.createPost(formData).subscribe(res => {
        this.router.navigateByUrl("/admin/post");
      }, error => {
        console.log(error);
      });
    }
  }

}
