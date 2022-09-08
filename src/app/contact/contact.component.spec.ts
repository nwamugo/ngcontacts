import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { mockContacts } from './../shared/constants/mock-data.constant';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table', () => {
    component.contacts = [mockContacts]
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('table')).toBeTruthy();
  });

  it('table should have a header', () => {
    component.contacts = [mockContacts]
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('thead')).toBeTruthy();
  });

  it(`table should have a column with header 'First Name'`, () => {
    component.contacts = [mockContacts]
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('th[scope="col"]')?.textContent).toContain('First Name');
  });

  it(`table should have a column with header 'Last Name'`, () => {
    component.contacts = [mockContacts]
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('th[scope="col"]:nth-child(2)')?.textContent).toContain('Last Name');
  });

  it(`table should have a column with header 'Email'`, () => {
    component.contacts = [mockContacts]
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('th[scope="col"]:nth-child(3)')?.textContent).toContain('Email');
  });

  it(`table should have a column with header 'Phone number'`, () => {
    component.contacts = [mockContacts]
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('th[scope="col"]:nth-child(4)')?.textContent).toContain('Phone number');
  });
});
