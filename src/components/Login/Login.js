import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './Login.module.css';
import { auth, provider} from './../../firebase';
// import AppleIcon from '@mui/icons-material/Apple';
import { authActions } from './../../store/auth-redux';

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
            <button onClick={googleLogin}>SiGN IN WITH GOOGLE</button>
        </div>
    )
}

export default Login;
