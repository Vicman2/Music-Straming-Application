import {UiActionTypes} from '../actionTypes/uiActionTypes'

interface UiReduserState{
    loading:boolean, 
}

type Action = {
    type: string, 
    payload: any
}

const initialState = {
    loading: false
}



const uiReducer = (state: UiReduserState = initialState , action: Action) => {

    switch (action.type) {
        case UiActionTypes.START_LOADING:
            return{
                ...state, 
                loading: true
            }
        case UiActionTypes.STOP_LOADING:
            return{
                ...state, 
                loading: false
            }
            
    
        default:
            break;
    }
    
    return state
}


export default uiReducer