import { UserService } from './../../service/user-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { SearchComponent } from '../../components/search/search.component';
import { CardComponent } from '../../components/card/card.component';
import { NgFor } from '@angular/common';
import {  User } from '../../../data/user.interface';
import { SpinnerComponent } from '../../components/spinner/spinner.component';


@Component({
    selector: 'app-users',
    standalone: true,
    templateUrl: './users.component.html',
    styleUrl: './users.component.css',
    imports: [SearchComponent, CardComponent, NgFor,SpinnerComponent]
   
})
export class UsersComponent implements OnInit {
  @Input() users : User[] | undefined ;
  searchTerm = '';

  constructor(private UserService: UserService) { }

  filterUsers() {
  if(!this.users) {
    return [];
  }
    return this.users.filter(user => user.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
  }

  ngOnInit() : void {
     this.UserService.getUsers().subscribe(users => this.users = users);
  }

}
