import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './Login.module.css';
// import GoogleIcon from '@mui/icons-material/Google';
import { auth, provider} from './../../firebase';
// import AppleIcon from '@mui/icons-material/Apple';
import { authActions } from './../../store/auth-redux';
import TagFacesSharpIcon from '@mui/icons-material/TagFacesSharp';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {

    const dispatch = useDispatch();

    const googleLogin = async () => {

        try {
           
            const result = await auth.signInWithPopup(provider);

            if(result.user.emailVerified){
                dispatch(authActions.login(
                    {
                    id: result.user.uid,
                    name: result.user.displayName,
                    email: result.user.email,
                    pic: result.user.photoURL
                }))
            }
            
        } catch (e) {
            alert(`${e.message} please try again!!!`);
        }

 }

    return (
        <div className={classes.login}>
            <div className={classes.holder}>
            <TagFacesSharpIcon />
            <button onClick={googleLogin}>
                SIGN IN 
                <img src="https://cdn-icons-png.flaticon.com/128/281/281764.png" alt="google logo" className={classes.google}/>
            </button>
            </div>
        </div>
    )
}

export default Login;