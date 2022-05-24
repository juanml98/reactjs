import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Contador from './components/NavBar/Count/contador';
import ItemListContainer from './components/itemListContainer/itemListContainer';


function App() {
  return (
    <div className="App">
     
        <NavBar />
        <Contador />
        <ItemListContainer greeting='¡Bienvenidos!' />
        
        
    </div>
  );
}

export default App;
