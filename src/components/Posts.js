import React from 'react';
import Post from './Post';

const Posts = () => {
  const PAVEL_DUROV = "https://upload.wikimedia.org/wikipedia/commons/6/68/TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg";
  const RAY_IMAGE = "https://telegram.org/file/464001284/3/rHzxN3afclE.253809/78fbb9de14cac31e08";
  const RAY_IMAGE2 = "https://telegram.org/file/464001519/2/pw2YpXpzBFk.222382/9ec672b0125c50ad34";
  return (
    <div className="PostsPage">
      <div className="title">
        <h2>Posts</h2>
      </div>
      
      <Post user = {{
        name: "Pavel Durov",
        nickname: "@pavel_durov",
        logo: PAVEL_DUROV
      }}
      post = {{
        content: "Голосовые чаты 2.0: каналы, миллионы слушателей, запись эфиров, инструменты для организаторов",
        img: RAY_IMAGE,
        likes: 45
      }}
      date = "14 апреля" />

      <Post user = {{
        name: "Pavel Durov",
        nickname: "@pavel_durov",
        logo: PAVEL_DUROV
      }}
      post = {{
        content: "Автоудаление, виджеты и временные ссылки для приглашений",
        img: RAY_IMAGE2,
        likes: 45
      }}
      date = "25 апреля" />
    </div>
  )
}

export default Posts;