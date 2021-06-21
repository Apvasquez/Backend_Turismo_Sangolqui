export interface Patient {
    idpatient?: string,
    name: string,
    surname: string,
    birth: string,
    place: string,
    // email: string,
    // address: string,
    // phone: string,
    // created_by? : string,
    // created_at : string
};

export function Patient(data: any, id?: string){
    const { name, surname, birth ,place  } = data
    let object: Patient = {
        idpatient: id,
        name: name,
        surname: surname,
        birth: birth,
        place: place
    }
    return object
}