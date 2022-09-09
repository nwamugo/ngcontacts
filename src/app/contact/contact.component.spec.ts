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
    component.contacts = mockContacts;
    component.ngOnInit();
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign contacts to filterContacts on initializing', () => {
    expect(component.filteredContacts).toEqual(component.contacts)
  })

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
    expect(component.filteredContacts)
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
    expect(component.filteredContacts)
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
    expect(component.filteredContacts)
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
    expect(component.filteredContacts)
      .withContext('sorted in descending order')
      .toEqual(mockLastNameSortedReverse)
  });

  it('should render app-filter', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-filter')).toBeTruthy();
  })

  it('should filter contacts by Last Name', () => {
    expect(component.filteredContacts?.length).withContext('Before filter action').toBe(4)
    component.filterByLastName('h');
    expect(component.filteredContacts?.length).withContext('After filter action').toBe(1)
  })

  it('should clear filter', () => {
    component.filterByLastName('h');
    expect(component.filteredContacts?.length).withContext('after filter action').toBe(1)
    component.clearFilter();
    expect(component.filteredContacts?.length).withContext('after clear filter').toBe(4)
  })

  it('should render app-new-contact', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-new-contact')).toBeTruthy();
  })

  it('should render app-toast', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-toast')).toBeTruthy();
  })
});
