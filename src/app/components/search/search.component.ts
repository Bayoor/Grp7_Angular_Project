// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent  {
  searchControl = new FormControl('');

  // ngOnInit() {
  //   this.searchControl.valueChanges
  //     .pipe(
  //       debounceTime(300),
  //       distinctUntilChanged()
  //     )
  //     .subscribe((searchTerm: string) => {
  //       // Call the search function with the search term
  //       this.search(searchTerm);
  //     });
  // }

  // search(searchTerm: string) {
    
  // }
}

