import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';
import { WriterService } from 'src/app/services/writer.service';



@Component({
  selector: 'app-write-blog',
  templateUrl: './write-blog.component.html',
  styleUrls: ['./write-blog.component.css']
})
export class WriteBlogComponent {

  writeBlogData: Blog = {};

  constructor(private blogService: BlogService) { };

  writeBlogPost = () => {
    console.log(this.writeBlogData);
    this.blogService.addNewBlog(this.writeBlogData)
      .subscribe((resp: Blog) => {
        console.log(resp);
        alert(`Your blog ${resp.title} published successfully!`);
        this.writeBlogData = {};
      });
  };




}
