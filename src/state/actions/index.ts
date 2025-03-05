import { ActionType } from "../action-types"

interface AddAction {
    type: ActionType.ADD,
    payload: ItemType
}

interface RemoveAction {
    type: ActionType.REMOVE,
    payload: ItemType
}

export type Action = AddAction | RemoveAction

export type ItemType = {
    id: string,
    nombre: string,
    descripcion: string,
    marca: string,
    imagenURL: string,
    precio: string,
    costo: string
}

export type CartState = {
    itemQty: number,
    items: Array<ItemType>
}