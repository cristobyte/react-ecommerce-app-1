import React from 'react';

import TIENDA_DATA from './tienda.data'

import PreviewColeccion from '../../components/preview-coleccion/preview-coleccion'

class TiendaPage extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    colecciones: TIENDA_DATA
  }


  render() {
    const {colecciones} = this.state;
    return (<div className="tienda-page">
      {
        colecciones.map(({id, ...otrasProps}) => (
          <PreviewColeccion key={id} {...otrasProps} />
        ))
      }
    </div>)
  }
}


export default TiendaPage