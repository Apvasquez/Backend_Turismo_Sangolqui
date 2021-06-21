"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lisItemsMenu = exports.createItems_Menu = void 0;
const index_1 = require("../index");
const message_1 = require("../models/message");
const Items_Menu_1 = require("../models/Items_Menu");
const collection = "Items_Menu";
//--------------------------------------------------------------------------------------------------------////
//------------------------------------------------Clients CRUD`s------------------------------------------////
//--------------------------------------------------------------------------------------------------------////
async function createItems_Menu(req, res) {
    try {
        const newItems_Menu = Items_Menu_1.Items_Menu(req.body);
        const Items_MenuAdded = await (await index_1.db.collection(collection).add(newItems_Menu));
        return res.status(201).json(message_1.Message('Menu added', `Menu was added with id: ${Items_MenuAdded.id}`, 'success'));
    }
    catch (err) {
        return handleError(res, err);
    }
}
exports.createItems_Menu = createItems_Menu;
/*
//Search a doc by id
export async function retrieveClient(req:Request, res: Response){
    let varId = req.params.id;
    try{
        let doc = await db.collection(collection).doc(varId).get();
        if(!doc){
            return res.status(404).json(Message('Client does not found', `Client with id: ${varId} has not found`, 'warning'));
        }
        return res.status(200).json(Client(doc.data(), doc.id ));
    }catch(err){
        return handleError(res, err);
    }
};

//Modify docs by id
export async function updateClient(req:Request, res: Response){
    try{
        const client = Client(req.body);
        await db.collection(collection).doc(req.params.id).set(client, {merge:true});
        return res.status(201).json(Message('Client updated', `Client with id: ${req.params.id} has been updated`, 'success'));
    }catch(err){
        return handleError(res, err);
    }
};

//Delete clients by id
export async function deleteClient(req:Request, res: Response){
    let varId = req.params.id;
    try{
        await db.collection(collection).doc(varId).delete();
        return res.status(201).json(Message('Client deleted', `Client with id:${varId} has been deleted`,'success' ))
    }catch(err){
        return handleError(res, err);
    }
};

//List collection`s docs/*
export async function listClients(req:Request, res: Response){
    try{
        var last:number = parseInt(req.params.last);
        var limit:number = parseInt(req.params.limit);
        const snapshot = await db.collection(collection).limit(limit).offset(last).get();
        return res.status(200).json(snapshot.docs.map(doc=>Client(doc.data(), doc.id)));
    }catch(err){
        return handleError(res, err);
    }
};

export async function countClient(req:Request, res: Response){
    try{
        const snapshot = await db.collection(collection).get();
        return res.status(200).json({numberDocs: snapshot.size});
    }catch(err){
        return handleError(res, err);
    }
};
*/
async function lisItemsMenu(req, res) {
    try {
        let page = parseInt(req.params.page);
        let limit = parseInt(req.params.limit);
        let avoid = page == 1 ? 0 : (page - 1) * limit;
        let snapshot = await index_1.db.collection(collection).orderBy('name').offset(avoid).limit(limit).get();
        return res.status(200).json(snapshot.docs.map(doc => Items_Menu_1.Items_Menu(doc.data(), doc.id)));
    }
    catch (err) {
        return handleError(res, err);
    }
}
exports.lisItemsMenu = lisItemsMenu;
//list codes by interval
function handleError(res, err) {
    res.status(500).send({ message: `${err.code} - ${err.message}` });
}
//# sourceMappingURL=menucontroller.js.map