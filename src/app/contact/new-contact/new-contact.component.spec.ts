import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContactComponent } from './new-contact.component';

describe('NewContactComponent', () => {
  let component: NewContactComponent;
  let fixture: ComponentFixture<NewContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render button with "Add contact" title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#addBtn')?.textContent).toContain('Add contact');
  })
  it(`button should have 'Add contact' label`, () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('label[for="addBtn"]')?.textContent).toContain('Add contact');
  })
  it(`'Add contact button' should have no icon`, () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button > i')).toBeFalsy();
  })
  it(`'Add contact button should open a modal'`, () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled
      .querySelector(
        'button[data-bs-toggle="modal"][data-bs-target="#addContactModal"]'
      )).toBeTruthy();
    expect(compiled
      .querySelector(
        '#addContactModal'
      )).toBeTruthy();
  })
  it(`modal should have a 'Create Contact' header`, () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h5.modal-title')?.textContent).toContain('Create Contact');
  })
  it(`modal should have a body with the fields of the contact`, () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.modal-body')?.textContent).toContain('First Name');
    expect(compiled.querySelector('.modal-body')?.textContent).toContain('Last Name');
    expect(compiled.querySelector('.modal-body')?.textContent).toContain('Email');
    expect(compiled.querySelector('.modal-body')?.textContent).toContain('Phone number');
  })
  it(`modal should have a footer with a button to save`, () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.modal-footer > .btn-dark')?.textContent).toContain('Save changes');
  })
  it(`modal should have a footer with a button to cancel`, () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.modal-footer > .btn-outline-danger')?.textContent).toContain('Cancel');
  })
});
