import React from 'react';
import './headerOptions.css';
import { Avatar } from '@mui/material';

const HeaderOptions = ({ avatar ,Icon, title }) => {
    return (
        <div className='headerOptions'>
            {Icon && <Icon className="headerOption__icon" />}
            {avatar && <Avatar className="headerOption__icon" src={avatar} />
            }
            <h3 className='headerOption__title' >{title}</h3>
        </div>
    )
}

export default HeaderOptions
