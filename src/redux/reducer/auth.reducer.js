import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionType";

const initialState={
    accessToken:null,
    user:null,
    loading:false
}

export const authReducer=(previousState=initialState , action)=>{
    const {type,payload}=action;

    switch (type){
        case LOGIN_REQUEST:
            return {
                ...previousState,
                loading:true,
            }
        case LOGIN_SUCCESS:return{
            ...previousState,
            accessToken:payload,
            loading:false,
        }
        case LOGIN_FAIL:return{
            ...previousState,
            accessToken:null,
            loading:false,
            error:payload
        }
        case LOAD_PROFILE:return{
            ...previousState,
            user:payload
        }
            default:
                return previousState
             
    }
}