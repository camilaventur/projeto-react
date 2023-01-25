import React from "react";
import Product from "../Product/Product";




function MainPage(props) {
 const {products ,maxPreco, filtroOrdenado, minPreco,setMaxPreco,setMin,busca, adicionar}= props
 console.log(maxPreco) 
 return (
     
     <main className="block col-2"> 
      <h2>Produto</h2>
<div className="row">
  {products


  .filter((product) => {
    return product.nome.toLowerCase().includes(busca.toLowerCase());
  })

  .filter((product) => {
    if (minPreco !== "" && maxPreco !== 0) {
      if (product.valor >= minPreco && product.valor <= maxPreco) {
        return product.valor;
      }
    } else if (minPreco === "" && maxPreco === "") {
      setMin(0);
      setMaxPreco(1000);
    }
  })
  .sort((A,Z)=>{
    if(filtroOrdenado === "crescente"){
      return A.nome.localeCompare(Z.nome);

    }else if(filtroOrdenado ==="decrescente"){
      return Z.nome.localeCompare (A.nome);
    } else if (filtroOrdenado ==="ordenado"){
      return A.id.localeCompare(Z.id)
    }
 
})
  .map((product)=>(
    <Product key={product.id} product={product} adicionar={adicionar}> </Product>
  
    ))}

    </div> 
       
      </main>
    );
  }
  
  export default MainPage;
