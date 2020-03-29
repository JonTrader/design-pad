import React, {useState} from 'react';
import './App.css';
import DesignBoard from './components/DesignBoard';
import InputPad from './components/InputPad';

function App() {


  return (
    <div>
    <InputPad />
    <DesignBoard />
    </div>
  );
}

export default App;
