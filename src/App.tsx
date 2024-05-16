import React, { useEffect } from 'react';
import "./Styles/global.css"
import { Header } from './components/Header/Header';
import { Tasks } from './components/Tasks/Tasks';

function App() {
  useEffect(() => {
    console.log("Executando a função de useEffect...")
  }, [])

  
  return (
    <>
      <Header />
      <Tasks />
    </>  
  )
}

export default App;
