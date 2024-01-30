// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
// import { UsersComponent } from './pages/users/users.component';

// const routes: Routes = [
//     { path: '', redirectTo: '/home', pathMatch: 'full' },
//     { path: '/', component: HomeComponent },
//     { path: '/users', component: UsersComponent },
//     // { path: 'contact', component: ContactComponent },
//     // { path: '**', component: PageNotFoundComponent }
//   ];

//   @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
//   })
//   export class AppRoutingModule { }
  



import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';

export const routes: Routes = [
   { path:"", component: HomeComponent},
   {path: "users", component: UsersComponent},
];

