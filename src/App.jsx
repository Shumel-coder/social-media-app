import React, { useState } from "react";
import Post from "./components/Post";
import Comment from "./components/Comment";
import CreatePostForm from "./components/CreatePostForm";
import Feed from "./components/Feed";

function App(props) {
  const [posts, setPosts] = useState([]);

  let handleNewPost = (data) => {
    setPosts([...posts, data]);
  };

  return (
    <div>
      <h1>Fakebook!</h1>

      <CreatePostForm onNewSubmit={handleNewPost} />

      <Feed posts={posts} />
    </div>
  );
}
export default App;
