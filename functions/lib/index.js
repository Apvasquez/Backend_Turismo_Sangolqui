"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.api = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router_1 = require("./router");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
exports.db = db;
db.settings({ ignoreUndefinedProperties: true, timestampsInSnapshot: true });
const server = express();
server.use(cors({ origin: true }));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//    functions.logger.info("Hello logs!", {structuredData: true});
//    response.send("Hello from Firebase!");
//  });
router_1.routesPatient(server);
router_1.routesItems_Menu(server);
exports.api = functions.https.onRequest(server);
//# sourceMappingURL=index.js.map