import React from "react";

function Feed(props) {
  let posts = props.posts.map((data) => {
    return (
      <div>
        <h3>{data.title}</h3>
        <p>{data.content}</p>
        <br />
      </div>
    );
  });

  return <div>{posts}</div>;
}
export default Feed;
