import { Component, Input } from '@angular/core';

import { CardComponent } from '../../components/card/card.component';
import { FilterComponent } from "../../components/filter/filter.component";
import { NgFor } from '@angular/common';
import { User } from '../../../data/user.interface';
import { UserService } from './../../service/user-service.service';

// import { SearchComponent } from '../../components/search/search.component';



@Component({
    selector: 'app-users',
    standalone: true,
    templateUrl: './users.component.html',
    styleUrl: './users.component.css',
    imports: [CardComponent, NgFor, FilterComponent]
})
export class UsersComponent {
  @Input() users : User[] | undefined ;

  constructor(private UserService: UserService) { }

  ngOnInit() : void {
     this.UserService.getUsers().subscribe(users => this.users = users);
  }

}
