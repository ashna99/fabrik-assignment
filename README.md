1. For locally running project use npm run dev 
2. Used Express for backend services creation, AWS S3 for storing files and AWS rds for storing files data.
3. Used Heroku for deployment of the app.
4. .env file is not committed here since it contains aws and database credentials. 

APIs to use:
1. GET : https://fabrik-assign.herokuapp.com/api/files
2. POST: https://fabrik-assign.herokuapp.com/api/file-upload   : body - formdata: key -file , value: <your-3d-file>
# FabrikAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

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
