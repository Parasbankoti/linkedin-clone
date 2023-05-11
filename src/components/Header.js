import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import './HeaderOptions';
import './header.css';
import HeaderOptions from './HeaderOptions';


const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png"
                    alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input type='text'></input>
                </div>
            </div>
            <div className="header__right">
                <HeaderOptions Icon={HomeIcon} title="home" />
                <HeaderOptions Icon={PeopleIcon} title="connections" />
                <HeaderOptions Icon={WorkIcon} title="jobs" />
                <HeaderOptions Icon={MessageIcon} title="message" />
                <HeaderOptions Icon={NotificationsActiveIcon} title="notification" />
                <HeaderOptions avatar="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                 title='me' />
            </div>

        </div>
    )
}

export default Header;
