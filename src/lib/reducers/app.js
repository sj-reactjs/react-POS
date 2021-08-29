import { SET_CURRENT_STORE, SET_STORES_LIST } from "./../actions/app"

const defaultState = {
    currentStore: '',
    stores: [
        {
            id: '1',
            name: "Store A"
        },
        {
            id: '2',
            name: "Store B"
        },
        {
            id: '3',
            name: "Store C"
        },
    ]
}

export default function appReducer(state = defaultState, action) {
    switch (action.type) {

        case SET_CURRENT_STORE:
            return {
                ...state,
                currentStore: action.currentStore
            }
        case SET_STORES_LIST:
            return {
                ...state,
                stores: action.list
            }
        default:
            return state
    }
}