import React, { Component } from 'react';

export default class HeaderRegion extends Component{
  render(){
    return (
      <div className="header-region container text-white">
        <div className="div-with-bg-img bg-info container">
          <h2 className="header-text">Acompanhe aqui os resultados da Copa da Russia 2018!</h2>
          <button className="btn btn-success">Confira</button>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2>Veja o resultado assim que o gol sair!</h2>
          </div>
          <div className="col-md-6">
            <img className="img-thumbnail border-0" src="https://images.sportsdirect.com/images/products/08100843_l.jpg"/>
          </div>
        </div>
      </div>
    );
  }
}