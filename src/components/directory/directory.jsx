import React from 'react';

import MenuItem from '../menu-item/menu-item';

import './directory.scss'

class Directory extends React.Component {
  constructor() {
    super()

    this.state = {
      sections: [
        {
          title: 'gorros',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'tienda/gorros'
        },
        {
          title: 'chaquetas',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'tienda/jackets'
        },
        {
          title: 'calzado',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'tienda/sneakers'
        },
        {
          title: 'mujeres',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'tienda/womens'
        },
        {
          title: 'hombres',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'tienda/mens'
        }
      ]
    }
  }

  render() {
    return(
      <div className="directory-menu">
        {
          this.state.sections.map(({id, ...otrasProps}) => (
              <MenuItem key={id} {...otrasProps} />
            )
          )
        }
      </div>
    )
  }
}

export default Directory;