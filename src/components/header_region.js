import React, { Component } from 'react';

export default class HeaderRegion extends Component{
  render(){
    return (
      <section id="header-region">
        <div className="div-with-bg-img bg-light text-white pm-sm-5">
          <div className="p-sm-5 header-region-content">
            <div className="p-sm-5 mb-sm-5">
              <h1>Acompanhe aqui os resultados da Copa da Russia 2018!</h1>
              <button className="btn bg-light-green btn-sm px-4 py-2">
                <a className="text-white mx-2" href="#group-list"><small>Confira!</small></a>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}