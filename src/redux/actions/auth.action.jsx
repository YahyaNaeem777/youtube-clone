import { auth } from '../../firebase';
import {getAuth,GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
// import { Provider } from 'react-redux';
import { LOGIN_REQUEST, LOGIN_SUCCESS,LOAD_PROFILE, LOGIN_FAIL } from '../actionType';


export const login=()=>dispatch=>{
    try {

        dispatch({
            type:LOGIN_REQUEST
        })

        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider).then(result=>{
            console.log(result);

            const accesstoken=result.user.accessToken;
            const profile={
                name:result.user.displayName,
                photoURL:result.user.photoURL
            }
            dispatch({
                type:LOGIN_SUCCESS,
                payload:accesstoken,
            })
            dispatch({
                type:LOAD_PROFILE,
                payload:{...profile}
            })
        })
        // const result=await signInWithPopup(provider);
        // console.log(result);
    
        
    } catch (error) {
        console.log(error);
        dispatch({
            type:LOGIN_FAIL,
            payload:error.message
        })
    }
}