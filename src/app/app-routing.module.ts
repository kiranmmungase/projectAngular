import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAddComponent } from './component/book-add/book-add.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { BookListComponent } from './component/book-list/book-list.component';
import { BookUpdateComponent } from './component/book-update/book-update.component';
import { HomeComponent } from './component/home/home.component';
import { SearchComponent } from './component/search/search.component';

const routes: Routes = [
  {
    path : "booklist" , component : BookListComponent
  },
  {
    path : "search" , component : SearchComponent
  },
  {
    path : "addbook" , component : BookAddComponent
  },
  {
    path : "home" , component : HomeComponent
  },
  {
    path : " " , redirectTo:"home", pathMatch:"full"
  },
   {
    path : "update-book/:id" , component : BookUpdateComponent
  },
  {
    path : "book-details/:id" , component : BookDetailsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
