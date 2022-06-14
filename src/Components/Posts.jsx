import React from 'react'
import Post from './Post'

function Posts(props) {
  return (
    <div>
      {console.log(props)}
    {props.posts.map(post => <Post key={post.id} {...post} /> ) }    


    </div>
  )
}

export default Posts