import React, { Component } from 'react';

export default class HeaderRegion extends Component{
  render(){
    return (
      <section id="header-region" className="header-region">
        <div className="div-with-bg-img bg-light text-white">
          <div className="pl-sm-5">
            <h1>Acompanhe aqui os resultados da Copa da Russia 2018!</h1>
            <button className="btn btn-success btn-sm px-4 py-1">
              <a className="text-white" href="#group-list">Confira!</a>
            </button>
          </div>
        </div>
      </section>
    );
  }
}