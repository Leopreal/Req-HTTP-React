
import './App.css';

import {useState, useEffect} from 'react'

const url = "http://localhost:3000/products"

function App() {
  const [produtos, setProdutos] = useState([])

  //resgatando dados
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const res = await fetch("http://localhost:3000/products");
      const data = await res.json();
      setProdutos(data)
      return (data)
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state
  console.log(produtos)

  

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
    </div>
  );
}

export default App;
