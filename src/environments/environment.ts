// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyBPJbYyxp7brS83dwvw3FATIdY4khkSEfs",
    authDomain: "diet-monitoring.firebaseapp.com",
    databaseURL: "https://diet-monitoring.firebaseio.com",
    projectId: "diet-monitoring",
    storageBucket: "diet-monitoring.appspot.com",
    messagingSenderId: "1098800147710",
    appId: "1:1098800147710:web:a620e0730c31f2144449af",
    measurementId: "G-XPE7V7Y3E6"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.