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
      <div className='container'>
     
        <NavBar />
        <ItemListContainer greeting='¡Bienvenidos!' />
        <Contador />
        <ContadorClass />
        <ItemCount />

        
      </div>  
    </div>
  );
}

export default App;
