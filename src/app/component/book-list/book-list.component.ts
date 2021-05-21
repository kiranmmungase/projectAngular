import { Component, OnInit } from '@angular/core';
import { BookService } from '..//../service/book.service';
import { Book } from '../../classes/book'
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: any;

  constructor(private bookService:BookService, private router: Router) { }

  ngOnInit(): void {
     this.getBooks();
  }

  // private getBooks(){
  //   this.bookService.getBookDetails().subscribe(data => {
  //     this.books = data;
  //   });
  // }
  
  private getBooks(){
    this.bookService.getBookDetails().subscribe(data => {
      this.books =  data;
      console.log(data)
    });
  }
  bookDetails(id:String){
    this.router.navigate(['book-details',id]);
  }

  updateBook(id:number){
    this.router.navigate(['update-book',id]);
  }

  deleteBook(id:String){
    this.bookService.deleteBook(id).subscribe(data =>{
      console.log(data);
      this.getBooks();
    });
  }

}
