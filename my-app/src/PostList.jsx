import React from "react";

// JSX to render the UI based on the data and / or error that are passed as props
export default function PostList({ posts, error }) {
  return (
    <div>
      {error ? (
        <strong>
          <div
            style={{
              fontSize: "larger",
              marginTop: "10em",
            }}
          >
            Data fetching failed
          </div>
        </strong>
      ) : (
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
      )}
    </div>
  );
}
