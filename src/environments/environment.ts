// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    apiKey: "AIzaSyA1a3yv2WYBlWWoafkdlzvRbxhBZm2OTuU",
    authDomain: "cards-game-164a6.firebaseapp.com",
    projectId: "cards-game-164a6",
    storageBucket: "cards-game-164a6.appspot.com",
    messagingSenderId: "760380725265",
    appId: "1:760380725265:web:e325378594f0bb6277f9b0",
    measurementId: "G-RE53K553EY"
  },
  production: false,
  gameUrls: {
    websocket: "ws://localhost:8888/retrieve/",
    game: "http://localhost:8080/",
    player: "http://localhost:7777/",
    card: "http://localhost:7070/"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
