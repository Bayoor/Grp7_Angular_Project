import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { User } from '../../../data/user.interface';
import { UserService } from './../../service/user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-users-details',
  standalone: true,
  imports: [HttpClientModule, RouterOutlet],
  templateUrl: './users-details.component.html',
  styleUrl: './users-details.component.css'
})
export class UsersDetailsComponent implements OnInit {

  // user! :User  ;
  // @Input("id") userId ='';

  // constructor(
  //   private readonly UserService: UserService    ) { }

  // ngOnInit() : void {
  //    this.UserService.getUserById(Number(this.userId)).subscribe({
  //     next: (data) => {
  //       this.user = data;

  //     }
  //    });


  constructor(private route: ActivatedRoute, private userService: UserService) { }

  id!: number;
  loading: boolean = true;
  error: string | null = null;
  subscription!: Subscription;
  user!: User;

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];

    this.subscription = this.userService.getUserById(this.id).subscribe({
      next: (user) => this.user = user,
      error: () => this.error = "An error occurred, please try again",
      complete: () => this.loading = false
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  }

  



