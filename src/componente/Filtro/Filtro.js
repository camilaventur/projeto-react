import React from "react";

// query, setQuery

function Filtro({  filtroOrdenado,busca,setBusca, setFiltro, setMinPreco, maxPreco, setMaxPreco, minPreco }) {

  const onChangeOrdenado = (event) => {
    setFiltro(event.target.value)
    console.log(filtroOrdenado)
  }
  const onChangeMinimo = (event) => {
    setMinPreco(event.target.value)
    console.log(minPreco)
  }
  const onChangeMaximo = (event) => {
    setMaxPreco(event.target.value)
    console.log(maxPreco)}
    
    const onChangeBusca = (event) => {
      setBusca(event.target.value)
      console.log(busca)


    }
  return (

    <div>
      <select className="SelectPesquisa" onChange={(event) => onChangeOrdenado(event)}>
        <option className="BarraPesquisa" value='ordenado'>
          Ordenado
        </option>

        <option className="BarraPesquisa" value="crescente"> crescente</option>

        <option className="BarraPesquisa" value="decrescente">
          decrescente
        </option>


      </select>
      <input onChange={onChangeBusca} type="text" value={busca} placeholder= "Pesquisa"/>
      <input onChange={onChangeMinimo} type="number" placeholder="Mínimo"/>
      <input onChange={onChangeMaximo} type="number" placeholder="Máximo"/>

    </div>

  )


}

export default Filtro;

