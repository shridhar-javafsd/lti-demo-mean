import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeleteComponent } from './components/delete/delete.component';
import { EmpComponent } from './components/emp/emp.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { WriterComponent } from './components/writer/writer.component';
import { CommentsComponent } from './components/comments/comments.component';
import { WriteBlogComponent } from './components/write-blog/write-blog.component';
import { ProductComponent } from './components/product/product.component';
import { StoreModule } from '@ngrx/store';
import { addProductReducer } from './store/product.reducer';


@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    DeleteComponent,
    LoginComponent,
    RegisterComponent,
    BlogListComponent,
    BlogDetailsComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ParentComponent,
    ChildComponent,
    WriterComponent,
    CommentsComponent,
    WriteBlogComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // include this for ngModel 
    HttpClientModule,
    ReactiveFormsModule, // for reactive forms ,
    StoreModule.forRoot({product: addProductReducer})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
