import { useState, useEffect } from 'react';
import './App.css';
import Newpost from './Components/Newpost';
import Posts from './Components/Posts';

function App() {
  const [posts, setPosts] = useState([]);

  const readPosts = async () => {
    const resp = await fetch('https://tapio-exercise-api.herokuapp.com/api/posts')

    const data = await resp.json();
    //console.log(data)
    setPosts(data)
  }

  useEffect(() => {
    readPosts()
  }, [])




  return (
    <div className="App">
      <Newpost readPosts={readPosts} />
      <Posts posts={posts} setPosts={setPosts} />
      
    </div>
  );
}

export default App;
