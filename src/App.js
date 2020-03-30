import React, {useState} from 'react';
import './App.css';
import DesignBoard from './components/DesignBoard';
import InputBoard from './components/InputBoard';

function App() {


  return (
    <div>
    <InputBoard />
    <DesignBoard />
    </div>
  );
}

export default App;
