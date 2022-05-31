import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';





function App() {
   

  return (
    <div className="App">
      <div className='container'>
     
        <NavBar />
        <ItemListContainer />
     
        
        
      </div>  
    </div>
  );
}

export default App;
