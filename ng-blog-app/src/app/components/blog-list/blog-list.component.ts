import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  allBlogsList: any = [];

  constructor(private blogService: BlogService) {

  };

  ngOnInit(): void {

    this.blogService.getAllBlogs()
      .subscribe((resp: any) => {
        console.log(resp.length);
        this.allBlogsList = resp;
      });
  }

}


