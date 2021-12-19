import { SAVE_USER_CHOICE,CHANGE_CURRENT_Q ,CHANGE_MODAL_STATUS,SET_USER,REMOVE_USER} from "./types"

export const saveUserChoice=(number,data)=>{
    return {type:SAVE_USER_CHOICE,payload:{number,data}}
    }



// SECOND REDUCER
export const changeQuestion=(number)=>{
    return {type:CHANGE_CURRENT_Q,payload:number}
}

export const changeModalStatus=(value)=>{
    return {type:CHANGE_MODAL_STATUS,payload:value}
}

//Authentication

export const setUser=(user)=>{
    return {type:SET_USER,payload:user}
}

export const removeuser=()=>{
    return{type:REMOVE_USER}
}