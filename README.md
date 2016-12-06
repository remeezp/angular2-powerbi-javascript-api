# Angular 2 PowerBI Javascript Api

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.20-4.

I am still learning angular 2, but I have managed to integrate a powerbi viz into an app using the new javascript api.
You will need to have a backend service running, I chose the nodejs sample which is available [PowerBI NodeJS Sample] (https://github.com/remeezp/angular2-powerbi-javascript-api.git)

I installed the powerbi-client and copied the powerbi.js file to my application root & referenced it in my `index.html` file.
`npm install --save powerbi-client`

I hope it helps someone.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
