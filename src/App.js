import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Contador from './components/NavBar/Count/contador';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ContadorClass from './components/NavBar/countClass/contadorClass';
import ItemCount from './components/itemCount/itemCount'

function App() {
   

  return (
    <div className="App">
     
        <NavBar />
        <ItemListContainer greeting='¡Bienvenidos!' />
        
        <ItemCount />
        
        
    </div>
  );
}

export default App;
