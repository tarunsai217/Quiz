import data from "../data/data"
import { SAVE_USER_CHOICE ,SAVE_SINGLE_USER_CHOICE} from "./types"
const initialState=[...data]
    console.log("init",initialState);
    export default (state=initialState,action)=>{
        console.log('beforestate',state,action)
        switch(action.type){
            case SAVE_USER_CHOICE:
                console.log("multipleUserChoice")
                let req=[...state[action.payload.number-1].selectedAnswers]
                state[action.payload.number-1].selectedAnswers=req.includes(action.payload.data)?req.filter((item)=>{return item!==action.payload.data}):[...req,action.payload.data] 
                return [
                    ...state]
            case SAVE_SINGLE_USER_CHOICE:
                console.log("singleUserChoice in reducer",state[action.payload.number-1].selectedAnswers)
                state[action.payload.number-1].selectedAnswers=[];
                state[action.payload.number-1].selectedAnswers=[action.payload.data];
                console.log("singleUserChoice",state[action.payload.number-1].selectedAnswers)
                return [
                    ...state]
            default:
            return state;     
        }
    }