import { UiActionTypes } from "../actionTypes/uiActionTypes"


export const startLoader = ()=> {
    return{
        type: UiActionTypes.START_LOADING, 
    }
}


export const stopLoader = ()=> {
    return{
        type: UiActionTypes.STOP_LOADING, 
    }
}

