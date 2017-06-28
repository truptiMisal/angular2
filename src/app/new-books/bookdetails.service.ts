import { Injectable } from '@angular/core';
import { Book } from './book';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class BookdetailsService {
	book: Book[] = [{"id":0, 'name':'Angular-2','address':'Hosting Lec'},{"id":1, 'name':'Advance Java','address':'Oracle..'},{"id":2, 'name':'Python-3','address':'Snake..'}];
	constructor(private _http:Http) {}

	getdata() {
		return this.book;
	}
}
