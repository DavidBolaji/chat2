import React, { useState, useEffect, useRef } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import classes from './Chat.module.css';
import { useParams } from 'react-router-dom';
import { authActions } from './../../store/auth-redux';
import Avatar from '@mui/material/Avatar';
import { v4 as uuidv4 } from 'uuid';
import unique from '../../store/function'
import 'firebase/firestore';
import db from './../../firebase';

const Chat = (props) => {

    const authUser = useSelector(state => state.user)
    const inputRef = useRef();
    let { Email } = useParams();
    const [usersEmail, setUsersEmail] = useState('');
    const [usersPhoto, setUsersPhoto] = useState('');
    const [messages, setMessages] = useState([]);
    const { email } = authUser;
    const dispatch = useDispatch();



    useEffect(() => {

        if(Email) {
            db.collection('users').doc(Email).onSnapshot(snapshot => {
               
                setUsersEmail(snapshot.data().email)
                setUsersPhoto(snapshot.data().pic)
            })

            let newEmail = unique(Email,email);

            db.collection('messages').doc(newEmail).get().then((doc) => {
                if(doc.exists) {
                    db.collection('messages').doc(newEmail).onSnapshot((snapshot) => {
                       
                        if(!snapshot.exists){
                            return setMessages([]);
                        }
                        setMessages([...Object.values(snapshot.data())]);
                    })
                } else {
                    setMessages([])
                }
            })

            

        }
       
    }, [Email,email])



    const handleSubmit = async (e) => {
        e.preventDefault();
        
        let newEmail = unique(Email,email);

        db.collection('messages').doc(newEmail).set({
            [ new Date().toLocaleString() ]:
                {sid: email,
                docId: newEmail,
                rid: Email, 
                msg: inputRef.current.value,
                timestamp: new Date().getHours() + ':' + new Date().getMinutes(),
                },
               
        },{merge: true})

        await db.collection('messages').doc(newEmail).onSnapshot((snapshot) => {
            setMessages([...Object.values(snapshot.data())]);
        })

        
        db.collection('lastMsg').doc(newEmail).set({
            [newEmail]: inputRef.current.value
        })
        
        db.collection('lastMsg').onSnapshot(snapshot => {
            const newObj = {}
            const newObjkeys = [];
            const newObjValues = [];
           
            snapshot.docs.map(doc => {
                newObjkeys.push(...Object.keys(doc.data()));
                newObjValues.push(...Object.values(doc.data()));
               
            })

            for(let i = 0; i < newObjkeys.length; i++) {
                if(!newObj[newObjkeys[i]]) {
                    newObj[newObjkeys[i]] = newObjValues[i]
                }
                newObj[newObjkeys[i]] = newObjValues[i]

            }

           dispatch(authActions.addLastMsg({...newObj}))
           
        })

         db.collection('users').doc(authUser.email).set({
               aid: authUser.id, 
               email: authUser.email,
               name: authUser.name,
               pic: authUser.pic,
               lastmm: inputRef.current.value,
               rId: Email
            })

       
        
        inputRef.current.value = "";
    }



    return (
        <div className={classes['user-page']}>
            <div className={classes['user-page-header']}>
                <Avatar src={usersPhoto}/> 
                <div className={classes.user}>
                    <p>{usersEmail}</p>
                </div>
            </div>
            <div className={classes['sidebar-users__chat-area']}>
                {messages.map(message => {

                    if(message.rid !== email){
                        return (
                            <div key={uuidv4()} id={uuidv4()} className={`${classes['chat-msg']} ${classes.left}`}>
                                <p>{message.msg}</p>
                                <span>{message.timestamp}</span>
                            </div>
                        )
                    } else {
                         return (
                            <div key={uuidv4()} id={uuidv4()} className={`${classes['chat-msg']}`}>
                                <p>{message.msg}</p>
                                <span>{message.timestamp}</span>
                            </div>
                        )
                    }
                })}

                

            </div>
            <div className={classes['form-grp']}>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter Message" ref={inputRef} />
                    <button type="submit">Go</button>
                </form>
            </div>
            
        </div>
    )
}

export default Chat;
