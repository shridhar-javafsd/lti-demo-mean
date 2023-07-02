import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})

export class BlogDetailsComponent implements OnInit {

  // int num = 10;
  // let num = 10;
  // let num: number = 10;

  blogData: Blog = {};

  constructor(private blogService: BlogService, private activatedroute: ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.blogService.getBlogById(this.activatedroute.snapshot.params['id'])
      .subscribe((resp) => {
        console.log(resp);
        this.blogData = resp;
      });
  };

}



// assignment - 
// create two more components - 
// comments component 
// writer component 
// render them in blogdetails component 





