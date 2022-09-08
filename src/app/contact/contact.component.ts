import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../shared/models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() contacts: Contact[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
