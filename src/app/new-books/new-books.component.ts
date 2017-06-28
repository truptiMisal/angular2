import { Component, OnInit } from '@angular/core';
import { BookdetailsService } from './bookdetails.service';
import { Book } from './book';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-new-books',
  providers: [BookdetailsService],
  templateUrl: './new-books.component.html',
  styleUrls: ['./new-books.component.css']
})
export class NewBooksComponent implements OnInit {
  bookslist:Book[] = [];
  constructor(private bookservice:BookdetailsService) { }

  ngOnInit() {
  	this.bookslist = this.bookservice.getdata();
  	console.log(this.bookslist);
  	return this.bookslist;
  }

}
