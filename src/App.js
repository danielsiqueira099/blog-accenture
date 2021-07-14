import axios from 'axios'
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([])
  const api = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com`
  })

  useEffect(() => {
    api.get("/posts")
    .then(res => setPosts(pState => [...pState, ...res.data]))
  }, [])

  return (
   <div>
     {posts.map(post => (
       <div key={post.id}>
         <h1>{post.title}</h1>
         <p>{post.body}</p>
       </div>
     ))}
     
   </div>
  );
}

export default App;
