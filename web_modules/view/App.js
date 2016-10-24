import React from 'react';
import ReactDOM from 'react-dom';

var App = ({children}) =>
    <div>
      <section className="page-header">
        <h1 className="project-name">My User Space</h1>
        <h2 className="project-tagline">Take control of your private space</h2>
      </section>
      {children}
    </div>

export default App
