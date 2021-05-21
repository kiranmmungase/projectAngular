import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/classes/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  book: Book = new Book('','','','',0);

  message:any;


  constructor(private bookService: BookService,private router: Router) { }

  ngOnInit(): void {
  }

//   public addBookDetail(){
// let response = this.bookService.addBook(this.book);
// response.subscribe(data => {
// this.message=data;
// });
//   }
AddBook(){
  this.bookService.addBookDetails(this.book).subscribe(data => {
console.log(data);
  },
  error =>console.log(this.book));
}

goToBooList(){
this.router.navigate(['/booklist'])
}
  onSubmit(){
console.log(this.book);
this.AddBook();
alert("Book Added Successfully !!")
  }

}
