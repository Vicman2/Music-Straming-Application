import { MusicActionTypes } from "../actionTypes/musicActionTypes"

export const storeManyMusic = (payload :any)=> {
    return{
        type: MusicActionTypes.STORE_MANY_MUSIC, 
        payload
    }
}