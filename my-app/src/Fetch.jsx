import React, { useState, useEffect } from "react";

export default function Fetch() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .then((data) => setPosts(data))
      .catch((error) => console.error(error.message));
  }, []);
}
