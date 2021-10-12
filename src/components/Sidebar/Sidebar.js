import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import classes from './Sidebar.module.css';
import unique from '../../store/function'
import Avatar from '@mui/material/Avatar';
import db from '../../firebase'


import User from './../User/User';

const Sidebar = (props) => {
    const [users, setUsers] = useState([]);
    const [lastMesg, setLastMesg] = useState({})
    const authUser = useSelector(state => state.user)
    const lastMessage = useSelector(state => state.lastMsg)
   

    useEffect(() => {  

        if(authUser) {
            db.collection('users').doc(authUser.email).set({
               aid: authUser.id, 
               email: authUser.email,
               name: authUser.name,
               pic: authUser.pic,
               lastmm: '',
               rId: ''
            })

            db.collection('users').onSnapshot(snapshot => (
           
                setUsers(snapshot.docs.map(doc => ({
                    id: doc.id,
                    aid: doc.data().aid,
                    name: doc.data().name,
                    email: doc.data().email,
                    pic: doc.data().pic,
                    lastmm: doc.data().lastmm,
                    rId: doc.data().rId
                })))
            ))
        }
      

    }, [authUser])

    useEffect(() => {  
        setLastMesg(lastMessage)
    }, [lastMessage])



    const spec = users.filter(chat => {
        return authUser.email !== chat.email
    })


    const userList = spec.map((user) => {
        
        let newEmail = unique(authUser.email,user.email);
        
        
        let last;
        if(lastMesg[newEmail]) {
            last = lastMesg[newEmail]
        } else if (user.lastmm && user.rId === authUser.email) {
            last = user.lastmm;
        } else {
            last = ''
        }
        return  <User key={user.id} id={user.id} msg={user.email} src={user.pic} lastmsg={last} />
    })



    return (
        <div className={classes.sidebar}>
            <div className={classes['sidebar-header']}>
                <Avatar src={authUser.pic}/>
                <div className={classes.user}>
                    <p>{authUser.email}</p>                   
                </div>
            </div>
            <div className={classes['sidebar-users']}>
                {userList}
            </div>
           
        </div>
    )
}

export default Sidebar;
