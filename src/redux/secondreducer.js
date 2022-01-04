import {CHANGE_CURRENT_Q,CHANGE_MODAL_STATUS,SET_USER,REMOVE_USER, SET_INITIAL_STATE} from "./types";

const initialState={
    user:{},
    quizzes:[],
    createdQuizzes:[],
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
     case SET_INITIAL_STATE:
         return {...state,quizzes:action.payload.quizzes,createdQuizzes:action.payload.createdQuizzes}    
    default:
         return state;        
    }
}