import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Person } from './shared/interfaces/person';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'example-2';

  person = {
    givenName: "Gregory",
    surName: "Korfiatis",
    age: 30,
    email: "gregkorf@aueb.gr"
  }

  person0: Person = {
    givenName: "John",
    surName: "Little",
    age: 34,
    email: "john@aueb.gr"
  }

  person1: Person = {
    givenName: "George",
    surName: "Bobby",
    age: 40,
    email: "george@aueb.gr"
  }
}
