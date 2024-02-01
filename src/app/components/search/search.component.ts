// import { Component } from '@angular/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent  {
  @Input({ required: true})
  searchTerm!: string;

  @Output()
  searchTermChange: EventEmitter<string> = new EventEmitter();

  handleChange(value: string) {
    this.searchTermChange.emit(value);
  }
}

