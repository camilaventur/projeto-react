import React, { useState } from 'react';
import './App.css';
import Carrinho from './componente/Carrinho/Carrinho';
import Filtro from './componente/Filtro/Filtro';
import Header from './componente/Header/Header';
import MainPage from './componente/MainPage/MainPage';
import roupa from './roupas/roupas';


function App() {
   const { products } = roupa;
   const [itemCarrinho, setItemCarrinho] = useState([]);
   const [query, setQuery] = useState("")
   const [minPreco, setMinPreco] = useState(0)
   const [maxPreco, setMaxPreco] = useState(1000)
   const [filtroOrdenado, setFiltro] = useState("")
   const [busca, setBusca] = useState("")

   const adicionar = (product) => {
      const saida = itemCarrinho.find((x) => x.id === product.id);
      if (saida) {
         setItemCarrinho(itemCarrinho.map((x) => x.id === product.id ? { ...saida, qty: saida.qty + 1 } : x
         ));

      } else {
         setItemCarrinho([...itemCarrinho, { ...product, qty: 1 }])
      }
   };
   const remover = (product) => {
      const saida = itemCarrinho.find((x) => x.id === product.id);
      if (saida.qty === 1) {
         setItemCarrinho(itemCarrinho.filter((x) => x.id !== product.id))
      } else {
         setItemCarrinho(itemCarrinho.map((x) => x.id === product.id ? { ...saida, qty: saida.qty - 1 } : x
         )
         );
      }


   };

   return (
      <>
         <div className='App'>
            <Header countItemCarrinho={itemCarrinho.length}> </Header>
            <Filtro query={query} setQuery={setQuery} minPreco
               ={minPreco} setMinPreco={setMinPreco} maxPreco={maxPreco} filtroOrdenado={filtroOrdenado} setMaxPreco={setMaxPreco} setFiltro={setFiltro} setBusca={setBusca} busca={busca}


            />
         </div>
         <div className='row'>
            <MainPage busca={busca} setBusca={setBusca} adicionar={adicionar} minPreco={minPreco} setMinPreco={setMinPreco} maxPreco={maxPreco} products={products} filtroOrdenado={filtroOrdenado} >


            </MainPage>


            <Carrinho adicionar={adicionar} itemCarrinho={itemCarrinho} setItemCarrinho={setItemCarrinho} remover={remover} ></Carrinho>
         </div>
      </>
   );
}

export default App;
