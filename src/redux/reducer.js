import data from "../data/data"
import { SAVE_USER_CHOICE ,CHANGE_CURRENT_Q} from "./types"
const initialState=[...data]
    console.log("init",initialState);
    export default (state=initialState,action)=>{
        console.log('beforestate',state,action)
        switch(action.type){
            case SAVE_USER_CHOICE:
                let req=[...state[action.payload.number-1].selectedAnswers]
                state[action.payload.number-1].selectedAnswers=req.includes(action.payload.data)?req.filter((item)=>{return item!==action.payload.data}):[...req,action.payload.data] 
                return [
                    ...state]        
            default:
            return state;     
        }
    }