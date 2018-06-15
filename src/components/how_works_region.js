import React, { Component } from 'react';

export default class HowWorksRegion extends Component{
  render(){
    return (
      <section id="how-works-region" className="header-region">
          <div className="row">
            <div className="col-md-6 padding-50">
              <span className="text-success">COMO FUNCIONA</span>
              <h1>Veja o resultado assim que o gol sair!</h1>
              <span>Abaixo você consegue visualizar o resultado de todos os jogos da Copa do Mundo 2018.</span>
            </div>
            <div className="col-md-6">
              <img className="img-thumbnail border-0 m-0 rounded-0 p-0" src="../src/images/img-chuteira.png"/>
            </div>
          </div>
      </section>
    );
  }
}