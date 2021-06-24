export interface atractive {
    photo: string,
    idatv?: string,
    name: string,
    description: string,
    horario: string,
  };

export function atractive(data: any, id?: string){
    const { photo,name, description,horario } = data
    let object: atractive = {
        idatv: id,
        photo: photo,
        name: name,
        description: description,
        horario: horario
    }
    return object
}