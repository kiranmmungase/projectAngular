import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/classes/book';
import { BookService } from 'src/app/service/book.service';


@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

  id!: String;
  book: Book = new Book('','','','',0);
  gotoList: any;
  constructor(private bookService:BookService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBookById(this.id).subscribe(data => {
      this.book = data;
    },error => console.log(error));

  }

  updateBook(){
    this.bookService.updateBookById(this.id, this.book).subscribe(data => {
  console.log(data);
  alert("Book updated Successfully !!")

    },
    error =>console.log(this.book));
  }
  
  
    onSubmit(){
  console.log(this.book);
  this.updateBook();
    }
    goToEmployeeList(){
      this.router.navigate(['/booklist']);
    }
  

}
