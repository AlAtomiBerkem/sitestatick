import React from 'react';
import Button from '../button/button';
import { useTelegram} from "../../hooks/useTelegram";
import './header.css';

const Header = () => {

const { onClose, user} = useTelegram();
    
    return (
        <div className={'header'}>
            <Button onClick={onClose}>закрыть</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;