import React, { Component } from 'react';

export default class ShareRegion extends Component{
  render(){
    return (
      <section id="share-region">
      <div className="share-region bg-success container text-center text-white">
      <h2>Compartilhe com seus amigos!</h2>
      <span>Traga seus amigos para ver os resultados dos jogos!</span>
      <main className="flex-center">
        <div className="">
          <img src="../src/images/icon-facebook.png" href=""/>
        </div>
        <div className="">
          <img src="../src/images/icon-twitter.png" href=""/>
        </div>
        <div className="">
          <img src="../src/images/icon-rss.png" href=""/>
        </div>
        <div className="">
          <img src="../src/images/icon-instagram.png" href=""/>
        </div>
        <div className="">
          <img src="../src/images/icon-google.png" href=""/>
        </div>
      </main>
      <a className="align-bottom" href="https://www.bolaoshow.com.br/users/sign_in">Bolão da copa</a>
      </div>
      </section>
    );
  }
}