# Angular User Data Application

[![Angular](https://img.shields.io/badge/Angular-11.2.0-red)](https://angular.io/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-4.6.0-blueviolet)](https://getbootstrap.com/)
[![Tachyons](https://img.shields.io/badge/Tachyons-4.12.0-green)](http://tachyons.io/)

This Angular project is a comprehensive web application with two main components: a personal landing page and a user data page. The landing page serves as a space for personal expression or summarizing learning experiences. On the other hand, the user data page displays a list of users fetched from a RESTful API, emphasizing key Angular concepts such as components, routing, HTTP Client, and effective data handling.

## Contributors
- Bayonle Adebibi-Jose
- Dotun Ogunrinde
- Amobi Michael
- Nathaniel Ehimze
- Ezekiel Jackson
- Samuel Okafor

## Table of Contents

- [Angular User Data Application](#angular-user-data-application)
  - [Contributors](#contributors)
  - [Table of Contents](#table-of-contents)
  - [Objectives](#objectives)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)
  - [Usage](#usage)
  - [Styling](#styling)
  - [Resources](#resources)

## Objectives

- **Personal Expression:** Leverage the landing page to express personal thoughts or summarize learning experiences.
- **Angular Components and Routing:** Develop a navigation bar and distinct views (components) in Angular.
- **HTTP Client Usage:** Fetch user data from a RESTful API using Angular's HTTP Client.
- **Data Binding and Management:** Manage and display user data efficiently.
- **Angular Routing:** Implement seamless navigation between different views.

## Features

- **LandingPageComponent (optional):** Personal/summary page for introducing oneself or sharing learning experiences.
- **CardComponent:** Holds user data for display in the list.
- **UserListComponent:** Displays the list of users.
- **UserDetailComponent:** Displays detailed information about a specific user.
- **NavbarComponent:** Navigation bar for switching between the landing page and the user list.

## Getting Started

### Prerequisites

- Node.js and npm installed
- Angular CLI installed

  ```bash
  npm install -g @angular/cli
  ```

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Bayoor/Grp7_Angular_Project.git/
   ```

2. Navigate to the project folder:

   ```bash
   cd angular-user-data-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

```bash
ng serve
```

Visit http://localhost:4200/ in your browser to explore the application.

## Usage

Explore the landing page for personal expression or learning summaries.

![Landing Page](http://localhost:4200)

Navigate to the user data page to view the list of users.

![User List](http://localhost:4200/user)

Click on "View Details" to see detailed information about a specific user.

![User Detail](http://localhost:4200/user/1)

## Styling

The application is styled for a visually appealing experience. Creative layouts, images, and styles enhance the overall user interface.

- **Bootstrap:** A popular CSS framework for responsive and mobile-first design.
- **Tailwind:** A functional CSS library designed to enable users to create completely custom component design.

## Resources

- [Angular Official Documentation](https://angular.io/docs)
- [Angular HTTP Client](https://angular.io/guide/http)
- [Angular Routing & Navigation](https://angular.io/guide/router)
- [Using Angular Services](https://angular.io/tutorial/toh-pt4)
- [Styling: Bootstrap](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
- [Styling: Tailwind](https://tailwindcss.com/docs/installation)