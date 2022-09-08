import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../shared/models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() contacts: Contact[] | undefined;
  filteredContacts: Contact[] | undefined;
  firstNameAscends = false;
  lastNameAscends = false;


  constructor() { }

  ngOnInit(): void {
    this.filteredContacts = this.contacts;
  }

  sortByFirstName(): void {
    this.lastNameAscends = false
    if (this.firstNameAscends) {
      this.sortInDescendingOrder('firstName');
      this.firstNameAscends = false;
    } else {
      this.sortInAscendingOrder('firstName');
      this.firstNameAscends = true;
    }
  }

  sortByLastName(): void {
    this.firstNameAscends = false
    if (this.lastNameAscends) {
      this.sortInDescendingOrder('lastName');
      this.lastNameAscends = false;
    } else {
      this.sortInAscendingOrder('lastName');
      this.lastNameAscends = true;
    }
  }

  filterByLastName(lastName: string): void {
    this.filteredContacts = this.contacts?.filter(contact =>
      contact.lastName.toLowerCase().indexOf(
        lastName?.toLowerCase() ?? '') != -1
    )
  }

  clearFilter(): void {
    this.filteredContacts = this.contacts;
  }

  sortInDescendingOrder(field: string) {
    (this.filteredContacts as Contact[]).sort((a: Contact, b: Contact) =>
      a[field as keyof typeof a] < b[field as keyof typeof b]
        ? 1
        : -1
    )
  }

  sortInAscendingOrder(field: string) {
    (this.filteredContacts as Contact[]).sort((a: Contact, b: Contact) =>
      a[field as keyof typeof a] > b[field as keyof typeof b]
        ? 1
        : -1
    )
  }
}
