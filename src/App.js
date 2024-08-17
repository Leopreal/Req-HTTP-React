
import './App.css';

import {useState, useEffect} from 'react'

const url = "http://localhost:3000/products"

function App() {
  const [produtos, setProdutos] = useState([])

  //resgatando dados
  useEffect(async() => {
  
    const response = await fetch(url)

    const data = await response.json()

    setProdutos(data)

  }, [])

  console.log(produtos)

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
    </div>
  );
}

export default App;
