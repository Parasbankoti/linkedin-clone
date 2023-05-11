import React from 'react'
import './sidebar.css';
import { Avatar } from '@mui/material';

const Sidebar = () => {

    const recentItem = (topic) => (
        <div className="sidebar__recentItmes">
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )

    

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://t4.ftcdn.net/jpg/04/32/93/21/360_F_432932160_6RYXG0wzem08jrqPF33j9oYBorTWDTAA.jpg" alt="" />
                <Avatar className='sidebar__avatar' />
                <h2>Paras Bankoti</h2>
                <h4>Status</h4>

            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who's viewed you</p>
                    <p className='sidebar__statNumber' >256</p>
                </div>
                <div className="sidebar__stat">
                    <p>Impression on your post</p>
                    <p className='sidebar__statNumber' >15</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('Big Data')}
                {recentItem('BlockChain')}
                {recentItem('HCL')}
                {recentItem('Hiring')}
                {recentItem('Developer')}

            </div>
        </div>
    )
}

export default Sidebar
