import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() filterAction = new EventEmitter<string>();
  @Output() filterCleared = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onFilter(lastName: string): void {
    this.filterAction.emit(lastName);
  }

  onClearFilter(control: HTMLInputElement): void {
    control.value = '';
    this.filterCleared.emit();
  }

}
