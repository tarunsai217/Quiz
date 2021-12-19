import {CHANGE_CURRENT_Q,CHANGE_MODAL_STATUS,SET_USER,REMOVE_USER} from "./types";

const initialState={
    user:{},
    currentQ:1,
    showModal:false
}

export default (state=initialState,action)=>{
    console.log('beforestate2',state,action)
    switch(action.type){
     case CHANGE_CURRENT_Q:
         return {...state,currentQ:action.payload}
     case CHANGE_MODAL_STATUS:
         return {...state,showModal:action.payload}  
     case SET_USER:
         return {...state,user:action.payload}      
     case REMOVE_USER:
         return {...state,user:{}}
    default:
         return state;        
    }
}