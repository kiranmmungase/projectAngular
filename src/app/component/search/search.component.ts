import { Component, OnInit } from '@angular/core';
import { BookService} from '..//../service/book.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  id:number=0;

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }

  // public findById(){
  //   let response = this.bookService.getbyBookId(this.id);
  //   response.subscribe.(data => this.id=data);
  // }
}
