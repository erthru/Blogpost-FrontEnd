import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-adminpostcreate',
  templateUrl: './adminpostcreate.component.html',
  styleUrls: ['./adminpostcreate.component.scss']
})
export class AdminpostcreateComponent implements OnInit {

  txTitle = '';
  txBody = '';
  fileThumbnail = null;

  constructor(private http: HttpClient, private router:Router) { }

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
      this.http.post(environment.api+"post", formData).subscribe(res => {
        this.router.navigateByUrl("/admin/post");
      }, error => {
        console.log(error);
      });
    }
  }

}
