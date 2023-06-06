import React, { useEffect } from 'react';
import '../loginscreen/Login.scss';
import {AiFillGoogleCircle} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/auth.action';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { LOGIN_SUCCESS } from '../../redux/actionType';

const Login = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  // const accessToken=useSelector(state=>state.auth.accessToken);

  // const history=useHistory()

  const handleLogin=()=>{
    dispatch(login())
  }

  // useEffect(()=>{
    // dispatch({
    //   type:LOGIN_SUCCESS,
    //   navigate('/')
    // })
    // if(accessToken){
    // }
  // },[accessToken,navigate])


  return (
    <div className='loginscreen'>
        <h1>Youtube Clone</h1>
      <img src="Images/top_image.jpg" className='img-fluid' alt="Youtube Clone" />
      <button type='button' className='px-4'
      onClick={()=>{handleLogin()
      // navigate('/')
    }
      }
      >Login with Google <AiFillGoogleCircle className='google_logo' size={28}/></button>
    </div>
  )
}

export default Login
