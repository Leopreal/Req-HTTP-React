
import './App.css';

import {useState, useEffect} from 'react'

const url = "http://localhost:3000/products"

function App() {
  const [produtos, setProdutos] = useState([])

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  //resgatando dados
  useEffect(() => {
    async function fetchData() {
      
      const res = await fetch(url);
      const data = await res.json();
      setProdutos(data)
      // return (data)
    }
    fetchData();
  }, []); 

  const handleSubmit = async (e) => {
    e.preventDefault()

    const produto = {
      name,
      price,
    }
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(produto)
    })

    //carregando os dados automaticamente

    const addedProdutos = await res.json()

    setProdutos((prevProdutos) => [...prevProdutos, addedProdutos ])

    setPrice("")
    setName("")
  }




  return (
    <div className="App">
      <h1>
        <ul>
          {produtos.map((produto) => (
            <li key={produto.id}>
              {produto.name} - R$ {produto.price}
            </li>
          ))}
        </ul>
      </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome: 
          <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Preço: 
          <input type="number" value={price} name='price' onChange={(e) => setPrice(e.target.value)} />
        </label>
        <input type="submit" value="Criar " />
      </form>
    </div>
  );
}

export default App;
