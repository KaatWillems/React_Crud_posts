import React, { useEffect } from 'react'

function Post(props) {

        const deletePost = async () => {
        //console.log("delete button clicked")
        //console.log(id)
        const res = await fetch('https://tapio-exercise-api.herokuapp.com/api/deletepost', {
            // id: props._id,
            id: props._id,
            method: "POST",
        })
        if (res) {
          
         props.setPosts(prevposts => {
            //console.log(prevposts)
                  
            const newposts = prevposts.filter((p) => p._id !== props._id);
                     
            return newposts;
         });  
        }  
               
      }

    

  return (
  
<div className="cards">

  <div className="cards__item">
    <div className="card">
      <img  src={`${props.img}`} alt="post-pic" className="card__image" />
      <div className="card__content">
        <div className="card__title">{props.title}</div>
        <p className="card__text">{props.content}.</p>
        <div className='btn-wrapper'>
            <button className="btn">Edit</button>
            <button className="btn" onClick={() => deletePost(props._id)} >Delete</button>
        </div>
      </div>
    </div>
  </div>

   
  </div>
  
    
  )
}

export default Post