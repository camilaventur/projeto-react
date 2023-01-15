import React from "react";




export default function Carrinho(props) { 
    const {itemCarrinho, adicionar, remover } = props;
    const itemPreco = itemCarrinho.reduce((a, c) => a + c.qty * c.valor, 0);
    
    return (
      <aside className="block col-1">
        <h2>Carrinho</h2>
        <div>
          {itemCarrinho.length === 0 && <div>Carrinho vazio</div>}
          {itemCarrinho.map((item) => (
            <div key={item.id} className="row">
              <div className="col-2">{item.nome}</div>
              <div className="col-2">
                <button onClick={() => remover(item)} className="remove">
                  -
                </button>{' '}
                <button onClick={() => adicionar(item)} className="add">
                  +
                </button>
              </div>
  
              <div className="col-2 text-right">
                {item.qty} x ${item.valor.toFixed(2)}
              </div>
            </div>
          ))}
  
          {itemCarrinho.length !== 0 && (
            <>
              <hr></hr>
              <div className="row">
                <div className="col-2"><strong>Preço Total</strong></div>
                <div className="col-1 text-right"><strong>${itemPreco.toFixed(2)}</strong></div>
              </div>
           
              <hr />
              <div className="row">
                <button onClick={() => alert('Parabéns pela compra!')}>
                 Finalizar compra
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
    );
  }
  