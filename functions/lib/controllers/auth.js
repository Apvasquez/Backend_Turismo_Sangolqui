"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const admin = require("firebase-admin");
const message_1 = require("../models/message");
async function signup(req, res) {
    try {
        const { email, password, displayName, role } = req.body;
        const user = await admin.auth().createUser({
            email,
            password,
            displayName
        });
        await admin.auth().setCustomUserClaims(user.uid, { role });
        return res.status(201).json(message_1.Message('Success', `User ${user.displayName} created`, 'success'));
    }
    catch (err) {
        return handleError(res, err);
    }
}
exports.signup = signup;
function handleError(res, err) {
    res.status(500).send({ message: `${err.code} - ${err.message}` });
}
//# sourceMappingURL=auth.js.map