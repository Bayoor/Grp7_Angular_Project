import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { UsersDetailsComponent } from './pages/users-details/users-details.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
   { path:"", component: HomeComponent},
   {path: "user", component: UsersComponent},
   {path: "user/:id", component: UsersDetailsComponent},
   {path: "error", component: ErrorComponent}
];

