import React, { Component } from 'react';

export default class HowWorksRegion extends Component{
  render(){
    return (
      <section id="how-works-region" className="header-region">
        <div className="container-fluid">
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