import './App.css';
import Header from './companeents/header/header'
import {useTelegram} from "./hooks/useTelegram";
import {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import ProductList from "./companeents/productlist/ProductList.jsx";
import Form from "./companeents/Form/Form.jsx";

function App() {
  
    const {onToggleButton, tg} = useTelegram();
    
    useEffect(() => {
        tg.ready;
    }, [])
    
  return (
    <div className="App" >
        <Header/>
        <Routes>
            <Route index element={<ProductList/>}/>
            <Route path={'/form'} element={<Form/>}/>
        </Routes>
    </div>
  );
}

export default App;
