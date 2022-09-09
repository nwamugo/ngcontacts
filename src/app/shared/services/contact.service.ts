import { EventEmitter, Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  onCreateContact = new EventEmitter<Contact>();

  constructor() { }
}
