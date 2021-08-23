import {UserActionTypes} from '../actionTypes/userActionTypes'

interface UserReducerState{
    isLoggedIn: boolean, 
    user: null|{}, 
}

type Action = {
    type: string, 
    payload: any
}

const initalReducer = {
    isLoggedIn : false, 
    user: {}
}




const userReducer = (state: UserReducerState = initalReducer, action: Action) => {
    switch (action.type) {
        case UserActionTypes.STORE_USER:
            return {
                ...state, 
                user: action.payload.data
            }
    
        default:
            break;
    }
    return state
}


export default userReducer