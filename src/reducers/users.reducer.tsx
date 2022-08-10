import {User} from '../types/users.types'

export interface ReducerActionType{
    type:string,
    payload:User[]
}

interface UserState{
    users: User[]
}

let initialState:UserState = {
    users: []
}
export const userReducer = (state=initialState, action: ReducerActionType):UserState=>{
    switch(action.type){
        case "SET_USERS":
            return {...state, users: action.payload}
        case "FETCH_USERS":
            return state
        default:
            return state
    }
}