import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/layout/footer/footer.component";
import { NavbarComponent } from "../../shared/layout/navbar/navbar.component";
// import { NgOptimizedImage } from '@angular/common';



@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [FooterComponent, NavbarComponent]
})
export class HomeComponent {

}
