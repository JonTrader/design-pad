import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import DesignBoard from './components/DesignBoard';
import InputPad from './components/InputPad';

function App() {


  return (
    <span>
    <InputPad />
    <DesignBoard />
    </span>
  );
}

export default App;
