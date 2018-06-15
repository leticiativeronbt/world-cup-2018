import React, { Component } from 'react';

export default class ShareRegion extends Component{
  render(){
    return (
      <div className="jumbotron share-region bg-success container text-center text-white">
        <div className="row">Compartilhe com seus amigos!</div>
        <div className="row">Traga seus amigos para ver os resultados dos jogos!</div>
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
        <div className="row">Bolão da copa</div>
      </div>
    );
  }
}