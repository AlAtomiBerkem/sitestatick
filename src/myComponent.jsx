import React, {useEffect} from 'react';

const  MyComponent  = () =>{
    
    useEffect(() => {
        if(window.Telegram) {
            const tg = window.Telegram.WebApp.initData;
            console.log(tg, 'да, тг компонент загрузился')
        } else {
            console.error('Telegram not supported');
        }
    })

        return (
            <div>
            <h1>My component</h1>
            </div>
        );
}

export default MyComponent;