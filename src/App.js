import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
   

  return (
    <div className="App">
      
        <NavBar />
        <BrowserRouter>
        <Routes>
          <Route path='/about' element={<h1>En construcción</h1>}></Route>
        </Routes>
        <ItemListContainer />
     
     
     </BrowserRouter>
      </div>  

  );
}

export default App;
