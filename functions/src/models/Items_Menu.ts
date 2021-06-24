export interface Items_Menu {
    photo: string,
    idmenu?: string,
    name: string,
  };

export function Items_Menu(data: any, id?: string){
    const { name, photo } = data
    let object: Items_Menu = {
        idmenu: id,
        name: name,
        photo: photo
    }
    return object
}