"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patient = void 0;
;
function Patient(data, id) {
    const { name, surname, birth, place } = data;
    let object = {
        idpatient: id,
        name: name,
        surname: surname,
        birth: birth,
        place: place
    };
    return object;
}
exports.Patient = Patient;
//# sourceMappingURL=patient.js.map