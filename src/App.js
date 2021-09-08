import React from 'react';
import Header from './Header.js';
import Botonera from './Botonera.js';
import CardPerrito from "./CardPerrito";
import data from "./data.json";
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      filtro: "Todos"
    }
    this.handleFiltro = this.handleFiltro.bind(this)
  }

  handleFiltro(filtroObtenido){
    this.setState({
      filtro: filtroObtenido
    })
  }

  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <div className="listado-perritos">
            {
              this.state.filtro === "Todos" ? data.map((card) => <CardPerrito raza={card.name} tamanio={card.size}/>) 
              : data.filter((card) => card.size === this.state.filtro)
              .map((card) => <CardPerrito raza={card.name} tamanio={card.size}/>)
              
            }

            {
              
            }
          </div>
          <Botonera handleFiltro={this.handleFiltro}/>
        </main>
      </div>
    )
  }
}

export default App;