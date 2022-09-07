import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the navbar', () => {
    const debugEl = fixture.debugElement
    fixture.detectChanges();
    const navBarEl: HTMLElement = debugEl.query(By.css('nav')).nativeElement;
    expect(navBarEl).toBeTruthy();
  })

  it('navbar should contain SuiteCRM logo', () => {
    const debugEl = fixture.debugElement
    fixture.detectChanges();
    const imgEl: HTMLElement = debugEl.query(By.css('img')).nativeElement;
    expect(imgEl).toBeTruthy();
  })
});
