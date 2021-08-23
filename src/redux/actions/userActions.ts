import { UserActionTypes } from "../actionTypes/userActionTypes"


export const storeUser = (payload :any)=> {
    return{
        type: UserActionTypes.STORE_USER, 
        payload
    }
}