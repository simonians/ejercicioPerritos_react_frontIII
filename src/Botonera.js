import React from "react"

class Botonera extends React.Component {
    render() {
        return (
            <div className="opciones-tamanio">
                <button className="opcion" onClick={ () => this.props.handleFiltro("Pequeños") }>Pequeños</button>
                <button className="opcion" onClick={ () => this.props.handleFiltro("Medianos") }>Medianos</button>
                <button className="opcion" onClick={ () => this.props.handleFiltro("Grandes") }>Grandes</button>
                <button className="opcion" onClick={ () => this.props.handleFiltro("Todos") }>Todos</button>
            </div>
        )
    }
}

export default Botonera