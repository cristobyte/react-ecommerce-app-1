import React from 'react'

import './homepage.scss';

const HomePage = () => (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h2 className="title">ZAPATOS</h2>
            <span className="subtitle">VER MÁS</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h2 className="title">CHAQUETAS</h2>
            <span className="subtitle">VER MÁS</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h2 className="title">MUJERES</h2>
            <span className="subtitle">VER MÁS</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h2 className="title">HOMBRES</h2>
            <span className="subtitle">VER MÁS</span>
          </div>
        </div>
      </div>        
    </div>
)

export default HomePage;