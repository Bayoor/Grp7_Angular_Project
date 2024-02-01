import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { User } from '../../../data/user.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink, NgFor, RouterLinkActive],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() user!:User ;

  



// @Input({
//   required: true,
//   alias: "user"
// })

// user: IUser | null;

// constructor() {
//   this.user = null;

// }
}
