import React from 'react';
import button from '../../button';


const Header = () => {
    return (
        <div className={'header'}>
            <button onClick={onClose}>Закрыть</button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};

export default Header;