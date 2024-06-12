import React, { useState, useEffect } from "react";
import PostList from "./PostList";

export default function Fetch() {
  // Sets the state of the post data and errors
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  // Fetches the data from the API and either updates the state of data or error
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
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  }, []);

  // Render the PostList component and pass the data and error as props
  return <PostList posts={posts} error={error} />;
}
