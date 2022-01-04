import { Injectable } from '@angular/core';
import { Author } from '../domain/author';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HALResponse } from '../domain/halresponse';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  getAuthor(): Author {
    return new Author("Victor", "Hugo");
  }

  getAuthorFromBack(): Observable<Author> {
    return this.http.get<Author>("http://localhost:8081/library/author/1");
  }

  getAuthorListFromBack(): Observable<HALResponse<Author>> {
    return this.http.get<HALResponse<Author>>("http://localhost:8081/library/author");
  }

  create(firstName:String, lastName:String): void {
    this.http.post("http://localhost:8081/library/author", new Author(firstName, lastName)).subscribe();
  }
}
