import React from "react";

function Product(props){
    const {product, adicionar}=props;
    
       return(
          <>
         <div>
            <img className="small" src={product.imagem} alt={product.nome}></img>
          <h3>{product.nome} </h3>
          <div>R${product.valor}</div>
          <div>
            <button onClick={()=>adicionar(product)}>Adicionar ao Carrinho </button>
          </div>
<div>
    
</div>
          </div>
          </>
        );
        }
    
    export default Product;