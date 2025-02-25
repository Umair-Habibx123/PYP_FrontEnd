import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../../../services/blog.service';
import { colors } from '../../../styles/colors';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  colors = colors;

  blogs: any[] = [];
  featuredBlog: any | null = null; // Ensure it holds a single object, not an array
  tagColors: any = {};

  constructor(private router: Router, private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(blogs => {
      this.blogs = blogs;
    });

    this.blogService.getFeaturedBlog().subscribe(featuredBlog => {
      this.featuredBlog = featuredBlog;
    });

    this.blogService.getTagColors().subscribe(colors => {
      this.tagColors = colors;
    });
  }
}
