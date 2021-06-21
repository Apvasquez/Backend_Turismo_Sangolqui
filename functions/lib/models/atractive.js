"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atractive = void 0;
;
function atractive(data, id) {
    const { photo, name, description, horario } = data;
    let object = {
        idatv: id,
        photo: photo,
        name: name,
        description: description,
        horario: horario
    };
    return object;
}
exports.atractive = atractive;
//# sourceMappingURL=atractive.js.map