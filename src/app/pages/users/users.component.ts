import { UserService } from './../../service/user-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { SearchComponent } from '../../components/search/search.component';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule, NgFor } from '@angular/common';
import {  User } from '../../../data/user.interface';
import { SpinnerComponent } from '../../components/spinner/spinner.component';


@Component({
    selector: 'app-users',
    standalone: true,
    templateUrl: './users.component.html',
    styleUrl: './users.component.css',
    imports: [SearchComponent, CardComponent, NgFor,SpinnerComponent, CommonModule]
   
})
export class UsersComponent implements OnInit {
  isLoading = false;
  
  @Input() users : User[] | undefined ;
  searchTerm = '';

  constructor(private UserService: UserService) { }

  filterUsers() {
  if(!this.users) {
    return [];
  }
    return this.users.filter(user => user.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
  }

  // ngOnInit() : void {
  //    this.UserService.getUsers().subscribe(users => this.users = users);
  // }

  ngOnInit() : void {
    this.isLoading = true; // Set loading state to true before fetching data
  
    this.UserService.getUsers().subscribe(
      users => {
        this.users = users;
        this.isLoading = false; // Set loading state to false when data is received
      },
      error => {
        // Handle errors if needed
        console.error('Error fetching users:', error);
        this.isLoading = false; // Also set loading state to false on error
      }
    );
  }

}
