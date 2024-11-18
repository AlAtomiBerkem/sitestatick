import './App.css';
import Header from './companeents/header/header'
import {useTelegram} from "./hooks/useTelegram";
import {useEffect} from "react";

function App() {
  
    const {onToggleButton, tg} = useTelegram();
    
    useEffect(() => {
        tg.ready;
    }, [])
    
  return (
    <div className="App" >
        <Header/>
        <button onClick={onToggleButton}>Toggle</button>
        <p>hello</p>
    </div>
  );
}

export default App;
