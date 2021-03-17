import {getAuthUserData} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS :
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) => { // React сам передаст внутренней функции параметр Диспатч
    let promise = dispatch(getAuthUserData())      // Санка, получаем пользователя
    promise.then(() => {                           // initialized - true
        dispatch(initializedSuccess())
    })
}

export default appReducer;
