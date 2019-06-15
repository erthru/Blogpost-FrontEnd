import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  baseUrl = "http://localhost:8080/";

  constructor(private http:HttpClient) { }

  getAdminDetail(id:String){
    return this.http.get(this.baseUrl+"author/"+id)
  }

  updateAdminDetail(formData:FormData){
    return this.http.put(this.baseUrl+"author/"+localStorage.getItem("id"),formData);
  }

  loginAdmin(formData:FormData){
    return this.http.post(this.baseUrl + "author/login", formData);
  }

  registerAdmin(formData:FormData){
    return this.http.post(this.baseUrl+"author",formData);
  }

  getAuthorPosts(id:String, page:Number){
    return this.http.get(this.baseUrl + "post/author/" + localStorage.getItem("id") + "?page=" + page + "&size=5&sort=id,desc")
  }

  getPosts(page:Number){
    return this.http.get(this.baseUrl + "post?page=" + page + "&size=5&sort=id,desc")
  }

  searchAuthorPosts(id:String, query:String){
    return this.http.get(this.baseUrl + "post/search/author/"+id+"/query?q=" + query);
  }

  searchPosts(query:String){
    return this.http.get(this.baseUrl + "post/search/query?q=" + query);
  }

  createPost(formData:FormData){
    return this.http.post(this.baseUrl+"post", formData);
  }

  getPost(id:String){
    return this.http.get(this.baseUrl + "post/" + id);
  }

  updatePostThumbnail(formData:FormData, id:String){
    return this.http.post(this.baseUrl+"post/thumbnail/"+id, formData)
  }

  updatePost(formData:FormData, id:String){
    return this.http.put(this.baseUrl+"post/"+id,formData)
  }

  deletePost(id:String){
    return this.http.delete(this.baseUrl+"post/"+id);
  }

}
