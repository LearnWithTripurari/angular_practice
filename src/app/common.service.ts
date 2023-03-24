import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {first, Observable} from "rxjs";
import {Post} from "./post.model";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getPost():Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(first())
  }
}
