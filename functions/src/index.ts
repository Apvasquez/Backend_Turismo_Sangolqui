import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { routesPatient , routesItems_Menu } from './router';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
db.settings({ignoreUndefinedProperties : true, timestampsInSnapshot: true});

const server = express();
server.use(cors({origin: true}));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//    functions.logger.info("Hello logs!", {structuredData: true});
//    response.send("Hello from Firebase!");
//  });
routesPatient(server);
routesItems_Menu(server);
 export const api = functions.https.onRequest(server);
 export { db };
