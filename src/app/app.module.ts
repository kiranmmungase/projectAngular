import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './component/book-list/book-list.component';
import { TestComponent } from './components/test/test.component';
import { BookAddComponent } from './component/book-add/book-add.component';
import { BookUpdateComponent } from './component/book-update/book-update.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SearchComponent } from './component/search/search.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './component/home/home.component';
import { DiologBoxComponent } from './component/diolog-box/diolog-box.component'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BookListComponent,
    BookAddComponent,
    BookUpdateComponent,
    BookDetailsComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    HomeComponent,
    DiologBoxComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
