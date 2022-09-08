import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render a filter input`, () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('input')).toBeTruthy();
  });

  it(`should render two buttons`, () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('button')?.length).toBe(2);
  });

  it('input label should read "Filter by Last Name"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('label')?.textContent).toContain('Filter by Last Name');
  })

  it('filter button should have a title with the text "Filter"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.textContent).toContain('Filter');
  })

  it('filter button should have a filter icon', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('i[class="bi bi-funnel"]')).toBeTruthy();
  })

  it('clear button should NOT contain an icon', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button:nth-of-type(2) > i')).toBeFalsy();
  })

  it('clear button should have a "Clear Filter" title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button:nth-of-type(2)')?.textContent).toContain('Clear Filter');
  })

  it('should filter the contact table when filter button clicked', () => {
    spyOn(component, 'onFilter');
    const compiled = fixture.nativeElement as HTMLElement;
    compiled.querySelector('button')?.click();
    expect(component.onFilter).toHaveBeenCalled();
  })

  it('should emit the event when #onFilter is called', () => {
    const emitSpy = spyOn(component.filterAction, 'emit');
    component.onFilter('h');
    expect(emitSpy).toHaveBeenCalledWith('h');
  })

  it('should show all records when clear filter button is clicked', () => {
    spyOn(component, 'onClearFilter');
    const compiled = fixture.nativeElement as HTMLElement;
    compiled.querySelectorAll('button')[1]?.click();
    expect(component.onClearFilter).toHaveBeenCalled();
  })

  it('should emit the event when #onClearFilter is called', () => {
    const emitSpy = spyOn(component.filterCleared, 'emit');
    const compiled = fixture.nativeElement as HTMLElement;
    component.onClearFilter(compiled.querySelector('input') as HTMLInputElement);
    expect(emitSpy).toHaveBeenCalledWith();
  })
});
