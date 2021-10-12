import React from 'react'
import classes from './User.module.css'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';

const User = ({ id, msg, src, lastmsg, onClick }) => {
   
    return (
        <Link to={`/users/${msg}`}>
        <div className={classes.user} >
            <Avatar src={src} />
            <div className={classes.msg}>
                <p>{msg}</p>
                {lastmsg !== '' && <p>{lastmsg}</p>}
            </div>
        </div>
        </Link>
    )
}

export default User
