// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "firebase/app";

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyD-aQmTylwIHZZ0ccfD_vodn3b6FbL7dPw",
    authDomain: "ea18-efefb.firebaseapp.com",
    projectId: "ea18-efefb",
    storageBucket: "ea18-efefb.firebasestorage.app",
    messagingSenderId: "400226741062",
    appId: "1:400226741062:web:cf7cb9f7b4330728d65347"
  },

};

const app = initializeApp(environment.firebaseConfig);


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.