import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input()
  blogId: any = ''; // 22
  
  commentsData: any = [];

  constructor(private commentService: CommentService) { };

  ngOnInit(): void {
    console.log(this.blogId);
    this.commentService.getCommentsByBlogId(this.blogId) // 22
      .subscribe((resp) => {
        console.log(resp);
        this.commentsData = resp;
      });
  }
};

