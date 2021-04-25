import React from 'react';
import TelegramPhoto from './img/TelegramPhoto.jpeg';

const Home = () => {
  return (
    <div className="HomePage">
      <div className="title">
        <h2>Telegram Applications</h2>
      </div>
      <div className="HomePage__img">
        <img width="100%" src={TelegramPhoto} alt={TelegramPhoto}></img>
      </div>
      <div className="HomePage__about">
        <p>Our apps are open source and support reproducible builds. This means that anyone can independently verify that our code on GitHub is the exact same code that was used to build the apps you download from App Store or Google Play. Developers are welcome to check out our Guide to Reproducible Builds for iOS and Android.</p>
        <p></p>
      </div>
    </div>
  )
}

export default Home;