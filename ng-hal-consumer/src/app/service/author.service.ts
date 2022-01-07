import { Injectable } from '@angular/core';
import { Author } from '../domain/author';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HALResponse } from '../domain/halresponse';
import { HALPage } from '../domain/halpage';

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

  getAuthorListFromBack(page: HALPage): Observable<HALResponse<Author>> {
    return this.http.get<HALResponse<Author>>(`http://localhost:8081/library/author?page=${page.number}&size=${page.size}`);
  }

  create(firstName: string, lastName: string): void {
    let author = new Author(firstName, lastName);
    this.http.post<Author>("http://localhost:8081/library/author", author).subscribe();
  }

  update(author: Author): Observable<Author> {
    return this.http.put<Author>(author._links.self.href, author);
  }

  delete(author: Author): Observable<Author> {
    return this.http.delete<Author>(author._links.self.href);
  }
}
