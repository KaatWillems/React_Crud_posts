import { useState, useEffect } from 'react';
import './App.css';
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
  }, [posts])




  return (
    <div className="App">

      <Posts posts={posts} setPosts={setPosts} />
      
    </div>
  );
}

export default App;
