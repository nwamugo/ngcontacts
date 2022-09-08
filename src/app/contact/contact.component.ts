import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../shared/models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() contacts: Contact[] | undefined;
  firstNameAscends = false;
  lastNameAscends = false;


  constructor() { }

  ngOnInit(): void {
  }

  sortByFirstName(): Contact[] {
    this.lastNameAscends = false
    if (this.firstNameAscends) {
      // sort in descending order
      (this.contacts as Contact[]).sort((a: Contact, b: Contact) =>
        a.firstName < b.firstName
          ? 1
          : -1
      )
      this.firstNameAscends = false;
    } else {
      // sort in ascending order
      (this.contacts as Contact[]).sort((a: Contact, b: Contact) =>
        a.firstName > b.firstName
          ? 1
          : -1
      )
      this.firstNameAscends = true;
    }
    return this.contacts as Contact[];
  }

  sortByLastName(): Contact[] {
    this.firstNameAscends = false
    if (this.lastNameAscends) {
      // sort in descending order
      (this.contacts as Contact[]).sort((a: Contact, b: Contact) =>
        a.lastName < b.lastName
          ? 1
          : -1
      )
      this.lastNameAscends = false;
    } else {
      // sort in ascending order
      (this.contacts as Contact[]).sort((a: Contact, b: Contact) =>
        a.lastName > b.lastName
          ? 1
          : -1
      )
      this.lastNameAscends = true;
    }

    return this.contacts as Contact[];
  }
}
