import { ActionType } from "../action-types"
import { Dispatch } from "redux"
import { Action, ItemType } from "../actions"

export const addProduct = (product: ItemType) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD,
            payload: product
        })  
    }
}

export const removeProduct = (product: ItemType) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.REMOVE,
            payload: product
        })  
    }
}
