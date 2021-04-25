import React from 'react';
import PostPhoto from './PostPhoto'
import TG1 from './img/tg1.webp';
import TG2 from './img/tg2.jpeg';
import TG3 from './img/tg3.jpeg';
import TG4 from './img/tg4.jpeg';
import TG5 from './img/tg5.jpeg';
import TG6 from './img/tg6.jpg';


const Gallery = () => {

  const photos = [TG1, TG2, TG3, TG4, TG5, TG6];

  return (
    <div className="GalleryPage">
    <h2>Gallery</h2>
      <div className="container">

        {photos.map((element, index) => <PostPhoto key={index}  photo={element} />)}
      </div>
    </div>
  )
}

export default Gallery;