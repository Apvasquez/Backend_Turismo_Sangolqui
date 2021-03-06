"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesAtractives = exports.routesItems_Menu = exports.routesPatient = exports.routeSignUp = void 0;
const atractivecontroller_1 = require("./controllers/atractivecontroller");
// import { createClient, retrieveClient, updateClient, deleteClient, listClients, countClient, listClient } from './controllers/client';
// import { createVaccine, retrieveVaccine, updateVaccine, deleteVaccine, listVaccine } from './controllers/vaccine';
// import { createPet, retrievePet, updatePet, deletePet, countPet, listPet, listClientPets, listPets, countPetTypes } from './controllers/pet';
// import { createVeterinary, retrieveVeterinary, updateVeterinary, deleteVeterinary, listVeterinary } from './controllers/veterinary';
// import { createConsult, retrieveConsult, updateConsult, deleteConsult, listConsult, listClientConsult, listPetConsult, listAllConsult, countConsult } from './controllers/consult';
const auth_1 = require("./controllers/auth");
const menucontroller_1 = require("./controllers/menucontroller");
// import { createMedicine, retrieveMedicine, updateMedicine, deleteMedicine, listMedicine } from './controllers/medicine';
const patientcontroller_1 = require("./controllers/patientcontroller");
function routeSignUp(app) {
    app.post('/api/auth/signup', auth_1.signup);
}
exports.routeSignUp = routeSignUp;
// export function routesClient(app:Application){
//     app.post('/api/clients', createClient);
//     app.get('/api/clients/:id', retrieveClient);
//     app.put('/api/clients/:id', updateClient);
//     app.delete('/api/clients/:id', deleteClient);
//     app.get('/api/clients/interval/:limit/:last', listClients);
//     app.get('/api/count/clients', countClient);
//     app.get('/api/page/clients/:page/:limit', listClient);
//     app.get('/api/clients/:id/consults', listClientConsult);
// }
// export function routesConsults(app: Application){   
//     app.post('/api/consults', createConsult);
//     app.get('/api/consults/:id', retrieveConsult);
//     app.put('/api/consults/:id', updateConsult);
//     app.delete('/api/consults/:id', deleteConsult);
//     app.get('/api/count/consults', countConsult);
//     app.get('/api/page/consults/:page/:limit', listConsult);
//     app.get('/api/consults', listAllConsult);
// }
// export function routesVaccines(app:Application){
//     app.post('/api/vaccines', createVaccine);
//     app.get('/api/vaccines/:id', retrieveVaccine);
//     app.put('/api/vaccines/:id', updateVaccine);
//     app.delete('/api/vaccines/:id', deleteVaccine);
//     app.get('/api/vaccines', listVaccine);
// }
// export function routesVeterineries(app: Application){
//     app.post('/api/veterinaries', createVeterinary);
//     app.get('/api/veterinaries/:id', retrieveVeterinary);
//     app.put('/api/veterinaries/:id', updateVeterinary);
//     app.delete('/api/veterinaries/:id', deleteVeterinary);
//     app.get('/api/veterinaries', listVeterinary);
// }
// export function routesPet(app: Application){
//     app.post('/api/pets', createPet);
//     app.get('/api/pets/:id', retrievePet);
//     app.put('/api/pets/:id', updatePet);
//     app.delete('/api/pets/:id', deletePet);
//     app.get('/api/clients/:id/pets', listClientPets)
//     app.get('/api/clients/pets/:id', countPet);
//     app.get('/api/clients/:id/pets/page/:page/:limit', listPet);
//     app.get('/api/pets/:id/consults', listPetConsult);
//     app.get('/api/pets', listPets);
//     app.get('/api/count/pet/types', countPetTypes);
// }
// export function routesMedicines(app: Application){
//     app.post('/api/medicines', createMedicine);
//     app.get('/api/medicines/:id', retrieveMedicine);
//     app.put('/api/medicines/:id', updateMedicine);
//     app.delete('/api/medicines/:id', deleteMedicine);
//     app.get('/api/medicines', listMedicine)
// }
function routesPatient(app) {
    app.post('/api/patient', patientcontroller_1.createPatient);
}
exports.routesPatient = routesPatient;
function routesItems_Menu(app) {
    app.post('/api/items_menu', menucontroller_1.createItems_Menu);
    app.get('/api/items_menu/:page/:limit', menucontroller_1.lisItemsMenu);
}
exports.routesItems_Menu = routesItems_Menu;
function routesAtractives(app) {
    app.post('/api/atractive', atractivecontroller_1.createAtractives);
    app.get('/api/atractive/:page/:limit', atractivecontroller_1.lisAtractives);
}
exports.routesAtractives = routesAtractives;
//# sourceMappingURL=router.js.map