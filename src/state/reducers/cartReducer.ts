import { ActionType } from '../action-types'
import { Action, CartState, ItemType } from '../actions'

const initialState = {
    itemQty: 0,
    items: []
}

const reducer = (state: CartState = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.ADD: 
            return {
                itemQty: state.itemQty + 1,
                items: [...state.items, action.payload]
            }
        case ActionType.REMOVE: 
            return {
                itemQty: state.itemQty - 1,
                items: state.items.filter((item: ItemType) => item.id !== action.payload.id)
            }
        default:
            return state
    }
}

export default reducer