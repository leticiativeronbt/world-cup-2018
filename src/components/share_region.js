import React, { Component } from 'react';

export default class ShareRegion extends Component{
  render(){
    return (
      <section id="share-region">
        <div className="share-region bg-success container text-center text-white">
          <h2>Compartilhe com seus amigos!</h2>
          <span>Traga seus amigos para ver os resultados dos jogos!</span>
          <div className="row">
            <div className="col col-sm-1">
              fb
            </div>
            <div className="col col-sm-1">
              tw
            </div>
            <div className="col col-sm-1">
              rss
            </div>
            <div className="col col-sm-1">
              inst
            </div>
            <div className="col col-sm-1">
              g+
            </div>
          </div>
          <a className="align-bottom" href="https://www.bolaoshow.com.br/users/sign_in">Bolão da copa</a>
        </div>
      </section>
    );
  }
}