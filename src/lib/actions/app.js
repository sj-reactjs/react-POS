
import { fetchStores } from './../services/fetchStores'

export const SET_STORES_LIST = "SET_STORES_LIST"
export function setStores(list) {
    return {
        type: SET_STORES_LIST,
        list
    }
}

export function fetchAllStores() {
    return async function fetchStoreThunk(dispatch, getState) {
        const { store = [] } = getState()
        const stores = await fetchStores()
        dispatch(setStores(stores))
    }
}

export const SET_CURRENT_STORE = "SET_CURRENT_STORE"
export function setCurrentStore(currentStore) {
    return {
        type: SET_CURRENT_STORE,
        currentStore
    }
}
