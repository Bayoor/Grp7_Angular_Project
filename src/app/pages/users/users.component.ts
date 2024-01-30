import { Component } from '@angular/core';
import { SearchComponent } from '../../components/search/search.component';
import { CardComponent } from '../../components/card/card.component';
import { NgFor } from '@angular/common';
import { IUser } from '../../../data/user.interface';
import { USERS } from '../../../data/user.data';

@Component({
    selector: 'app-users',
    standalone: true,
    templateUrl: './users.component.html',
    styleUrl: './users.component.css',
    imports: [SearchComponent, CardComponent, NgFor]
})
export class UsersComponent {
users: IUser[] =USERS;

}
