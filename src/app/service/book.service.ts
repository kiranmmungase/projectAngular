import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { Book } from '../classes/book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  updateBook(id: number, book: Book) {
    throw new Error('Method not implemented.');
  }

  private bURL= "http://localhost:8080/";
  private baseURL = "http://localhost:8080/findAllBooks";
  private postURL = "http://localhost:8080/addBook";
  private getURL = "http://localhost:8080/findAllBooks/0";
  private deleteURL = "http://localhost:8080/delete/";



  constructor(private httpClient: HttpClient) { }
  
  // getBookDetails(): Observable<Book[]>{
  //   return this.httpClient.get<Book[]>(`${this.baseURL}`);
  // }

  getBookDetails(){
    return this.httpClient.get(this.baseURL);
  }

  addBookDetails(book:any){
    return this.httpClient.post(this.postURL,book,{responseType: "text" as "json"});
  }

  getBookById(id:String):Observable<Book>{
    return this.httpClient.get<Book>(`${this.baseURL}/${id}`)
  }

  updateBookById(id:String, book:any){
    return this.httpClient.put(this.bURL+'book/'+id,book,{responseType: "text" as "json"});
  }
  deleteBook(id:String):Observable<Book>{
    return this.httpClient.delete<Book>(`${this.deleteURL}/${id}`,{responseType: "text" as "json"});
  }
}
