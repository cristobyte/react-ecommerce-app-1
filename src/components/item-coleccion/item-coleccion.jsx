import React from 'react';

import './item-coleccion.scss';

const ItemColeccion = ({ id, name, price, imageUrl }) => (
  <div className="item-coleccion">
    <div 
      className="image"
      style={
        {
          backgroundImage: `url(${imageUrl})`
        }
      }
    />
    <div className="footer-coleccion">
      <span className="name">{name}</span>  
      <span className="price">{price}</span>
    </div>
    
    
  </div>
)

export default ItemColeccion