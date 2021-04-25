import React from 'react';

export default function Post(props) {
  return (
    <div className="post">
      <div className="post__logo">
        <img alt="" src={props.user.logo} />
      </div>
      <div className="post__description">
        <div className="post__header">
          <div className="post__user-info">
            <div className="post__user">
              <span className="user-name">{props.user.name}</span>
              <span className="user-hashtag">{props.user.nickname}</span>
              <span className="user-data-post">{props.date}</span>
            </div>
          </div>
        </div>  
        <span>{props.post.content}</span>
        <img alt="" src={props.post.img}/>
        <div className="post__actions">
        <span className="post___like">&#9829;<span>{props.post.likes}</span></span>
      </div>
      </div>
    </div>
  );
}
