import React, { useState } from "react";
import Post from "./components/Post";
import Comment from "./components/Comment";
import CreatePostForm from "./components/CreatePostForm";
import Feed from "./components/Feed";

function App() {
  const [posts, setPosts] = useState([]);

  let handleNewPost = (data) => {
    setPosts([...posts, data]);
  };

  return (
    <div>
      <div className="top">
        <h1 className="banner">Fakebook!</h1>

        <CreatePostForm onNewSubmit={handleNewPost} />
      </div>

      <Feed posts={posts} />
    </div>
  );
}
export default App;
