# ContactListFrontend

Frontend application with REST API architecture created using Angular. It allows customer to create contact list for organization which can be seen by every participating person. And can be edited only by authorized users. For backend documentation please visit this link : https://github.com/Frevoste/ContactListBackend

## Table of contents
* [Functionalities](#functionalities)
* [Setup/Angular](#setup)

## functionalities

<details><summary>CRUD contact</summary>
</details>
<details><summary>Save and fetch data</summary>
To be fixed :(
</details>
<details><summary>Log In</summary>
To do.
</details>



To do:
* Fix fetching and saving data. Problems with displaying fetched data. It is stored in Contacts list, yet not displayed properly. Might be corelated with problem that occurs during creating new contact in which data is displayed properly but not saved in contactService.Contacts.
* Inlcude authorization in Http requests.

# Setup
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

To run this project You have to use commands:
*npm install
*ng serve


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
