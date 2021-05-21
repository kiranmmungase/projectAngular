import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { Book } from '..//..//classes/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  id!: String;
  book!: Book;

  
  constructor(private route:ActivatedRoute,private bookService:BookService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.book = new Book('','','','',0);
    this.bookService.getBookById(this.id).subscribe(data =>{
      this.book = data;
    });
  }

}
