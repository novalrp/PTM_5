import React, { useState } from 'react';
import Header from './Header';
import Footer from './footer';
import './App.css';
import List from './List';
import Image from './Image';
import Top from './Top';

import Button from 'react-bootstrap/Button';

const App = () => {
  const [state, setState] = useState(0);


  const increase = () => {
    setState(count => count + 1);
  };

  const decrease = () => {
    setState(count => count - 1);
  };

  return (
    <div className="App">
    
      <Button variant="success" onClick={increase}>Tambah</Button>
      <br />
      <span>{state}</span>
      <br />
    
      <Button variant="danger" onClick={decrease}>Kurang</Button>
      <h1>Hello React</h1>
      
    
      <Header list="10 daftar makanan" />
      <Top />
      <Image />
      <List />
      <Footer />
    </div>
  );
}

export default App;
