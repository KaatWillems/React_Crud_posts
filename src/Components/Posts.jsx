import React from 'react'
import Post from './Post'

function Posts(props) {
  return (
    <div>
      
    { props.posts === 0 ? "WAITING" 
    : props.posts.map(onePost => <Post key={onePost._id} {...onePost} setPosts={props.setPosts} /> ) }    


    </div>
  )
}

export default Posts