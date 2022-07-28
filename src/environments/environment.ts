// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    apiKey: "AIzaSyB95yn15NEsae2NLUkwQcphFvFrR0OjEew",
    authDomain: "hero-betting-game-20938.firebaseapp.com",
    projectId: "hero-betting-game-20938",
    storageBucket: "hero-betting-game-20938.appspot.com",
    messagingSenderId: "62784328799",
    appId: "1:62784328799:web:bc2012ff248ab001bbb7ea"
  },
  production: false,
  gameUrls: {
    websocket: "ws://localhost:8888/retrieve/",
    game: "http://localhost:8080/",
    player: "http://localhost:7777/",
    card: "http://localhost:7072/"
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
