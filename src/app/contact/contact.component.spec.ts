import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import {
  mockContacts, mockFirstNameSorted, mockFirstNameSortedReverse,
  mockLastNameSorted, mockLastNameSortedReverse
} from '../shared/constants/mock-contacts.constant';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    component.contacts = mockContacts
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('table')).toBeTruthy();
  });

  it('table should have a header', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('thead')).toBeTruthy();
  });

  it(`table should have a column with header 'First Name'`, () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('th[scope="col"]')?.textContent).toContain('First Name');
  });

  it(`table should have a column with header 'Last Name'`, () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('th[scope="col"]:nth-child(2)')?.textContent).toContain('Last Name');
  });

  it(`table should have a column with header 'Email'`, () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('th[scope="col"]:nth-child(3)')?.textContent).toContain('Email');
  });

  it(`table should have a column with header 'Phone number'`, () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('th[scope="col"]:nth-child(4)')?.textContent).toContain('Phone number');
  });

  it(`table should sort in ascending order using column header 'First Name'`, () => {
    component.firstNameAscends = false;
    fixture.detectChanges();
    component.sortByFirstName();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('td')?.textContent).toContain('a');
    expect(component.firstNameAscends)
      .withContext('sorted in ascending order')
      .toBe(true)
    expect(component.contacts)
      .withContext('sorted in ascending order')
      .toEqual(mockFirstNameSorted)
  });

  it(`table should sort in descending order using column header 'First Name'`, () => {
    component.firstNameAscends = true;
    fixture.detectChanges();
    component.sortByFirstName();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('td')?.textContent).toContain('g');
    expect(component.firstNameAscends)
      .withContext('sorted in descending order')
      .toBe(false)
    expect(component.contacts)
      .withContext('sorted in descending order')
      .toEqual(mockFirstNameSortedReverse)
  });

  it(`table should sort in ascending order using column header 'Last Name'`, () => {
    component.lastNameAscends = false;
    fixture.detectChanges();
    component.sortByLastName();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('td:nth-child(2)')?.textContent).toContain('b');
    expect(component.lastNameAscends)
      .withContext('sorted in ascending order')
      .toBe(true)
    expect(component.contacts)
      .withContext('sorted in ascending order')
      .toEqual(mockLastNameSorted)
  });

  it(`table should sort in descending order using column header 'Last Name'`, () => {
    component.lastNameAscends = true;
    fixture.detectChanges();
    component.sortByLastName();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('td:nth-child(2)')?.textContent).toContain('h');
    expect(component.lastNameAscends)
      .withContext('sorted in descending order')
      .toBe(false)
    expect(component.contacts)
      .withContext('sorted in descending order')
      .toEqual(mockLastNameSortedReverse)
  });
});
