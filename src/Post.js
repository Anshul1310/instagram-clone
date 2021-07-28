import { Avatar } from '@material-ui/core'
import React from 'react'
import css from './Post.css';

function Post({username, captions, imageUrl}) {
  return (
    <div className="post_main_div">
      <>
        <div className="post_div">
          <Avatar src="gh" alt={username} />
          <p className="post_username">Anshul Negi</p>
        </div>
        <img className="post_image" src={imageUrl} />
        <h4 className="captions_post_text"><strong>{username} </strong>:{captions}.</h4>


      </>
    </div>
  );
}
export default Post
