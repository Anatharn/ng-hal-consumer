import { Component } from '@angular/core';
import { Author } from './domain/author';
import { AuthorService } from './service/author.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-hal-consumer';
  author!: Author;
  authorList: Author[] = [];
  firstName!: String;
  lastName!: String;

  constructor(private authorService: AuthorService){
      
  }

  doSomething(): void {
    console.log("Something done!");
  }

  getAuthor(): void {
    this.author = this.authorService.getAuthor();
  }

  getAuthorFromBack(): void {
    this.authorService.getAuthorFromBack()
    .subscribe( author => this.author = author);
  }

  getAuthorListFromBack(): void {
    this.authorService.getAuthorListFromBack()
    .subscribe(halResponse => this.authorList = halResponse._embedded.author);
  }

  createAuthor(): void {
    this.authorService.create(this.firstName, this.lastName);
  }
}
