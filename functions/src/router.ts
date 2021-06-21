import { Application } from 'express';
import { createAtractives, lisAtractives } from './controllers/atractivecontroller';
// import { createClient, retrieveClient, updateClient, deleteClient, listClients, countClient, listClient } from './controllers/client';
// import { createVaccine, retrieveVaccine, updateVaccine, deleteVaccine, listVaccine } from './controllers/vaccine';
// import { createPet, retrievePet, updatePet, deletePet, countPet, listPet, listClientPets, listPets, countPetTypes } from './controllers/pet';
// import { createVeterinary, retrieveVeterinary, updateVeterinary, deleteVeterinary, listVeterinary } from './controllers/veterinary';
// import { createConsult, retrieveConsult, updateConsult, deleteConsult, listConsult, listClientConsult, listPetConsult, listAllConsult, countConsult } from './controllers/consult';
import { signup } from './controllers/auth';
import { createItems_Menu, lisItemsMenu } from './controllers/menucontroller';
// import { createMedicine, retrieveMedicine, updateMedicine, deleteMedicine, listMedicine } from './controllers/medicine';
import { createPatient } from './controllers/patientcontroller';

export function routeSignUp(app: Application){
    app.post('/api/auth/signup', signup);
}

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

export function routesPatient(app: Application){
    app.post('/api/patient', createPatient);
}
export function routesItems_Menu(app: Application){
    app.post('/api/items_menu', createItems_Menu);
    app.get('/api/items_menu/:page/:limit', lisItemsMenu);
}
export function routesAtractives(app: Application){
    app.post('/api/atractive', createAtractives);
    app.get('/api/atractive/:page/:limit', lisAtractives);
}
