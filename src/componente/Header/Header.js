import React from "react";




function Header({countItemCarrinho}) {
    return (
        <header className="block row center">
        <div>
          <img src=""/>
          <a href="#/">
            <h1>Roupas Espaciais</h1>
          </a>
        </div>
        <div>
          <a href="#/cart">
            Cesta{' '}
            {countItemCarrinho ? (
              <button className="badge">{countItemCarrinho}</button>
            ) : (
              ''
            )}
          </a>{' '}
          <a href="#/signin"> SignIn</a>
        </div>
      </header>
    );
  }

export default Header;
