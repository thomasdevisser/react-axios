import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(response.data);
    }
    fetchPosts();
  }, []);

  return (
    <div className="App">
      {posts.map((post, i) => (
        <p key={i}>{post.title}</p>
      ))}
    </div>
  );
}

export default App;
