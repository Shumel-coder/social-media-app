import React, { useState } from "react";
import Comment from "./Comment";
import CreatePost from "./CreatePostForm";
import CreateComment from "./CommentForm";
import CommentFeed from "./CommentFeed";

function Post(props) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

  let handleNewComment = (data) => {
    setComments([...comments, data]);
  };

  function handleLike() {
    setLikes(likes + 1);
  }

  return (
    <div className="postCard">
      <h3> {props.author} </h3>
      <h4> {props.content} </h4>
      <h5> Likes: {likes} </h5>
      <button onClick={handleLike}>Like</button>
      <p>Comments:</p>
      <CommentFeed comments={comments} />
      <br />
      <CreateComment onNewSubmit={handleNewComment} />
      <br />
    </div>
  );
}
export default Post;
