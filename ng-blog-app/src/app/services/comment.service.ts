import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  commentUrl: string = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }

  getCommentsByBlogId = (blogId: number) => {
    console.log(blogId);
    return this.http.get(`${this.commentUrl}?postId=${blogId}`);
  };

}

