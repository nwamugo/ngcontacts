import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastComponent } from './toast.component';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a toast`, () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#liveToast')).toBeTruthy();
  });

  it(`should have a toast header`, () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.toast-header')?.textContent).toBeTruthy();
  });

  it(`should have a toast body`, () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.toast-body')?.textContent).toBeTruthy();
  });
});
