import React from 'react'

function Post(props) {

    //const id = props.id

    //console.log(setPosts)

    const deletePost = async (id) => {
        console.log("ai ai")
        
        // const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        //     method: "DELETE",
        // });

        // props.setPosts(prevposts => {
        //     // const newposts = prevposts.filter(p => p._id !== post._id);
        //     // return newposts;
        // });
    
        // // const data = await resp.json();
        // //console.log(data)
        
      }
    
// deletePost()
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
            <button className="btn" onClick={deletePost}>Delete</button>
        </div>
      </div>
    </div>
  </div>

 
  
  </div>
  



    
  )
}

export default Post