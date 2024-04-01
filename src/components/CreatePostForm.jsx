import React, { useState } from "react";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(title, content);
  };

  let handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  let handleContentChange = (event) => {
    setContent(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="postTitle">Title</label>
      <input type="text" className="postTitle" onChange={handleTitleChange} />
      <br />
      <label htmlFor="postContent">Content</label>
      <input
        type="textarea"
        className="postContent"
        onChange={handleContentChange}
      />
      <br />
      <br />
      <input
        type="submit"
        value="Post"
        disabled={title === "" || content === ""}
      />
    </form>
  );
}

export default CreatePost;
