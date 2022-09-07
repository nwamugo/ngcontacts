import { Component } from '@angular/core';
import { Contact } from './shared/models/contact.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact('Duziem', 'Ugoji', 'tickettoduzz@gmail.com', '08060909150'),
      new Contact('Joe', 'Baker', 'joe.baker@email.com', '08034505678'),
      new Contact('Alice', 'Sally', 'sallycalled@email.com', '07042345150'),
      new Contact('Oliver', 'Twist', 'askformore@email.com', '08112209150'),
      new Contact('Frodo', 'Baggins', 'myprecious@email.com', '08035509731'),
    ]
  }
}
