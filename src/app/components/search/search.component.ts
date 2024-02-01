// import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import {  FormsModule, NgModel } from '@angular/forms';
// import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgFor, NgModule, NgModel,  FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent  {
  
  @Input({required: true})
  search!: string;
  @Output()
  searchChange:EventEmitter<Search> = new EventEmitter();


  handleChange(value: string) {
    const filters = this.getActiveFilters();
    this.searchChange.emit({value, filters})
  }
  getActiveFilters() {
    throw new Error('Method not implemented.');
  }
}

