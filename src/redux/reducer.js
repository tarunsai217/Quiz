import data from "../data/data"
import { SAVE_USER_CHOICE ,SAVE_SINGLE_USER_CHOICE,SET_BOOKMARK, SET_QUESTIONS} from "./types"
const initialState=[...data]
    export default (state=initialState,action)=>{
        console.log('beforestate',state,action)
        switch(action.type){
            case SAVE_USER_CHOICE:
                let req=[...state[action.payload.number-1].selectedAnswers]
                state[action.payload.number-1].selectedAnswers=req.includes(action.payload.data)?req.filter((item)=>{return item!==action.payload.data}):[...req,action.payload.data] 
                return [
                    ...state]
            case SAVE_SINGLE_USER_CHOICE:
                state[action.payload.number-1].selectedAnswers=[];
                state[action.payload.number-1].selectedAnswers=[action.payload.data];
                return [
                    ...state]
            case SET_BOOKMARK:
                state[action.payload-1].bookmark=!(state[action.payload-1].bookmark)
                return [
                    ...state]     
            case SET_QUESTIONS:
                return [...action.payload]            
            default:
            return state;     
        }
    }