import React from 'react';

const PostPhoto = (props) => {
  return (
    <div key={props.key} className="post-photo">
      <a href="#"><img src={props.photo} alt={props.photo}/></a>
    </div>
  )
}

export default PostPhoto;