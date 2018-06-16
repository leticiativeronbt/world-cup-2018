import React, { Component } from 'react';

export default class ShareRegion extends Component{
  render(){
    return (
      <section id="share-region">
        <div className="share-region bg-success container text-center text-white">
          <div className="padding-50">
            <span className="display-5 text-lighter">Compartilhe com seus amigos!</span>
            <p className="text-lighter"><small>Traga seus amigos para ver os resultados dos jogos!</small></p>
          </div>
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
          <a className="align-bottom text-white" href="https://www.bolaoshow.com.br/users/sign_in"><small>BOLAOCOPA 2018</small></a>
        </div>
      </section>
    );
  }
}