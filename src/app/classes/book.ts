export class Book {
    id:String;
    bookName: String;
    authorName: String;
    publisherName: String;
    price: number;

    constructor(id: String, bookName: String,authorName: String,publisherName: String ,price: number) {
this.id = id;
this.bookName = bookName;
this.authorName = authorName;
this.publisherName = publisherName;
this.price = price;
    }

}

// export const category: Book = {
//     id: 0,
//     description: ''
// };