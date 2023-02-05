import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private url: string = "https://jsonplaceholder.typicode.com";
  constructor(private http: HttpClient) { }

   
  public getAllRegisterUsers(): Observable<any> {
    return this.http.get<any>(`${this.url}/users`);
  }

  public getAlbumByUserId(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/users/${userId}/albums`)
  }
   
  public addPost(post: any): Observable<any> {
    return this.http.post<any>(`${this.url}/posts`,post);
  }

  public deletePost(postId: number): Observable<any>{
    return this.http.delete(`${this.url}/posts/${postId}`);
  }

  public getPostByUserId(userId: number): Observable<any>{
   
    return this.http.get<any>(`${this.url}/users/${userId}/posts`);
  }

  public getAllAlbum(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/albums`)
  }

  public getCommentsByPost(postId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/posts/${postId}/comments`);
  }

  public getPhotosByAlbumId(albumId: number): Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/albums/${albumId}/photos`);
  }
}
