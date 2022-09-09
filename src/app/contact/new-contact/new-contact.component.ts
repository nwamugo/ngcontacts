import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/shared/services/contact.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  contactForm: FormGroup | undefined;
  contactAdded: boolean = false;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.createContactForm();
  }

  createContactForm() {
    this.contactForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern("^[\+]?[0-9]*$")])
    })
  }

  addNewContact() {
    if (this.contactForm && this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return
    }
    this.contactService.onCreateContact.emit(this.contactForm?.value);
    this.contactForm?.reset();
  }

  onKeyPress(event: any) {
    const pattern = /[0-9\+]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
