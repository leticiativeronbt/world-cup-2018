import React, { Component } from 'react';

import icon_facebook from '../images/icon-facebook.png';
import icon_twitter from '../images/icon-google.png';
import icon_rss from '../images/icon-rss.png';
import icon_instagram from '../images/icon-instagram.png';
import icon_google from '../images/icon-google.png';

const ROOT_URL = "https://leticiativeronbt.github.io/world-cup-2018/";
const SHARE_FACEBOOK_URL=`https://www.facebook.com/sharer/sharer.php?u=${ROOT_URL}`;
const SHARE_TWITTER_URL=`https://twitter.com/home?status=${ROOT_URL}`;
const SHARE_RSS_URL=`https://plus.google.com/share?url=${ROOT_URL}`;
const SHARE_INSTAGRAM_URL=`https://plus.google.com/share?url=${ROOT_URL}`;
const SHARE_GOOGLE_URL=`https://plus.google.com/share?url=${ROOT_URL}`;

export default class ShareRegion extends Component{
  render(){
    return (
      <section id="share-region">
        <div className="bg-success container-fluid text-center text-white p-sm-5">
          <div className="padding-50 font-weight-lighter pb-sm-4">
            <span className="display-5">Compartilhe com seus amigos!</span>
            <p className="text-white-transparent"><small>Traga seus amigos para ver os resultados dos jogos!</small></p>
          </div>
          <div className="pt-sm-3">
              <main className="d-sm-flex justify-content-center">
                <div className="">
                  <a href={SHARE_FACEBOOK_URL} target="_blank"><img src={icon_facebook} alt="compartilhar no facebook"/></a>
                </div>
                <div className="">
                  <a href={SHARE_TWITTER_URL} target="_blank"><img src={icon_twitter} alt="compartilhar no twitter"/></a>
                </div>
                <div className="">
                  <a href={SHARE_RSS_URL} target="_blank"> <img src={icon_rss} alt="compartilhar no rss"/></a>
                </div>
                <div className="">
                  <a href={SHARE_INSTAGRAM_URL} target="_blank"><img src={icon_instagram} alt="compartilhar no instagram"/></a>
                </div>
                <div className="">
                  <a href={SHARE_GOOGLE_URL} target="_blank"><img src={icon_google} alt="compartilhar no google"/></a>
                </div>
              </main>
              <a className="text-white-transparent" href="https://www.bolaoshow.com.br/users/sign_in"><small>BOLAOCOPA 2018</small></a>
          </div>
        </div>
      </section>
    );
  }
}