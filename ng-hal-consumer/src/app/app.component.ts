import { Component } from '@angular/core';
import { Author } from './domain/author';
import { HALPage } from './domain/halpage';
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
  firstName!: string;
  lastName!: string;
  page: HALPage = new HALPage(0, 10);

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
    this.loadAuthorList(this.page);
  }

  createAuthor(): void {
    this.authorService.create(this.firstName, this.lastName);
  }

  updateAuthor(author: Author): void {
    author.firstName = author.firstName + Math.random().toString();
    this.authorService.update(author).subscribe(a => console.log(`author updated ${a.firstName}`));
    
  }

  deleteAuthor(author: Author): void {
    this.authorService.delete(author).subscribe(a=> console.log(`author deleted ${a}`));
  }

  // ----  PAGINATION --- //
  goToPrevious(): void {
    this.page.number--;
    this.loadAuthorList(this.page);
  }

  goToNext(): void {
    this.page.number++;
    this.loadAuthorList(this.page);
  }

  loadAuthorList(page: HALPage): void {
    this.authorService.getAuthorListFromBack(page)
    .subscribe(halResponse => {
      this.authorList = halResponse._embedded.author;
      this.page = halResponse.page;
    });
  }
}
