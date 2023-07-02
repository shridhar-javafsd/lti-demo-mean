// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

// guide - https://angular.io/guide/router

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { EmpComponent } from './components/emp/emp.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ParentComponent } from './components/parent/parent.component';
import { RegisterComponent } from './components/register/register.component';
import { WriteBlogComponent } from './components/write-blog/write-blog.component';

const routes: Routes = [
  { path: 'blog/:id', component: BlogDetailsComponent },
  { path: 'bloglist', component: BlogListComponent },
  { path: 'emp', component: EmpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'write', component: WriteBlogComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


