import React, { useState, useEffect } from "react";

export default function Fetch() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((error) => console.error(error.message)); // Log the error to the console
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul style={{ listStyleType: "none" }}>
        {posts.map((post) => (
          <li key={post.id}>
            <span>{post.id}. </span>
            <strong>{post.title}</strong>
            <small>
              <p>{post.body}</p>
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
}
