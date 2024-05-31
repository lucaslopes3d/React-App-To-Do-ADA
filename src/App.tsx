import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Tasks } from './components/Tasks/Tasks';

import "./Styles/global.css"


function App() {
const [toggle, setToggle] = useState(false)


// useEffect(() => {
//   console.log('Executando a função do useEffect...');

//   return () => {
//     console.log('Isso aqui será executado quando o componente App for desmontado da tela.')
//   }
// }, [toggle])

// O useEffect será disparado sempre que alguma variável do array de
// dependências for alterada
// Por padrão, o useEffect sempre será disparad após a montagem do componente: componentDidMoont

  return (
    <>
      <Header />
      <Tasks />

      <button onClick={() => setToggle(!toggle)}>toggle</button>
    </>  
  )
}

export default App;
