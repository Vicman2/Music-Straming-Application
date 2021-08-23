import {MusicActionTypes} from '../actionTypes/musicActionTypes'

interface MusicReducerState{
    pageNo: number, 
    pageSize: number, 
    musicData: null | [],
}

const initialState = {
    pageNo: 1, 
    pageSize : 10, 
    musicData: null
}

type Action = {
    type: string,
    payload: any
}


const musicReducer = (state: MusicReducerState = initialState , action: Action) => {

    switch (action.type) {
        case MusicActionTypes.STORE_MANY_MUSIC:

            return{
                ...state, 
                musicData: action.payload.data,
                pageNo: action.payload.pageNo
            }
        default:
            break;
    }

    return state
}


export default musicReducer