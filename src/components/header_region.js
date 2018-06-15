import React, { Component } from 'react';

export default class HeaderRegion extends Component{
  render(){
    return (
      <section id="header-region">
        <div className="header-region">
          <div className="div-with-bg-img bg-info text-white">
            <h2 className="header-text">Acompanhe aqui os resultados da Copa da Russia 2018!</h2>
            <button className="btn btn-success btn-sm px-4 py-1" href="#group-list">Confira!</button>
          </div>
          <div className="row">
            <div className="col-md-6 p-100">
              <span className="text-success">COMO FUNCIONA</span>
              <h1>Veja o resultado assim que o gol sair!</h1>
              <span>Abaixo você consegue visualizar o resultado de todos os jogos da Copa do Mundo 2018.</span>
            </div>
            <div className="col-md-6">
              <img className="img-thumbnail border-0" src="https://images.sportsdirect.com/images/products/08100843_l.jpg"/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}