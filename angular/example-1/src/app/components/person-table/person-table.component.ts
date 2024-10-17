import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
    person2= {
      givenName: "Kostas",
      surName: "Sloukas",
      age: 33,
      email: "sloukilouk@aueb.gr",
    }
}
