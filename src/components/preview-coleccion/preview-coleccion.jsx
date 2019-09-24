import React from 'react'

import ItemColeccion from '../item-coleccion/item-coleccion';

import './preview-coleccion.scss'

const PreviewColeccion = ({ title, items }) => (
  <div className="preview-coleccion">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {
        items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otrasProps}) => (
          <ItemColeccion key={id} {...otrasProps} />
        ))
      }
    </div>
  </div>
)

export default PreviewColeccion