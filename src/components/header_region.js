import React, { Component } from 'react';

export default class HeaderRegion extends Component{
  render(){
    return (
      <section id="header-region" className="header-region">
        <div className="div-with-bg-img bg-info text-white">
          <h2 className="header-text">Acompanhe aqui os resultados da Copa da Russia 2018!</h2>
          <button className="btn btn-success btn-sm px-4 py-1" href="#group-list">Confira!</button>
        </div>
      </section>
    );
  }
}