import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Post(props) {
//edit:
    const [isDisabled, setIsDisabled] = useState(true);
    const [hasEdited, setHasEdited] = useState(false);
    const [editInput, setEditInput] = useState({
        title: props.title, content: props.content
    })

//ddelete:
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

//edit:
      const updatePost = () => {
        //setLoading(true);
        axios.post('https://tapio-exercise-api.herokuapp.com/api/updatepost', {
            id: props._id,
            title: editInput.title,
            content: editInput.content,
            //img: inputValues.img
        })
            .then(() => {
                //closeLoading()
            })
            .catch(err => console.log(err));
    }

    // to only fir UopdateDB function if somethibng is actually edited. 
    const editMode = () => {
        
        if (!hasEdited) {
            setIsDisabled(!isDisabled);
            setHasEdited(true)
            console.log("edited nothing (yet)")
        } else if (hasEdited){
            setIsDisabled(!isDisabled);
            console.log("update Post" )
            //updatePost()
            setHasEdited(false)
        }
    }

    const handleChange = (e) => {
       // e.preventDefault();
        setEditInput({...editInput,[e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(editInput);
    }

  return (
  
<div className="cards">

  <div className="cards__item">
    <div className="card">
      <img  src={`${props.img}`} alt="post-pic" className="card__image" />
      <div className="card__content">

      <form onSubmit={handleSubmit} name="form1" id="form1">
            <input className={`card__title_view ${!isDisabled && 'edit-mode'}`}
              //placeholder="Enter title" 
              disabled={isDisabled}
              name='title'
              value={editInput.title}
               onChange={handleChange}
              />
    
            <textarea className={`card__text_view ${!isDisabled && 'edit-mode'}`}
              //placeholder="Enter content" 
              style={{ height: "90%" }} 
              disabled={isDisabled}
              name='content'
              value={editInput.content}
               onChange={handleChange}
              />
            
           
                {/* <button className="btn">Post</button> */}
               
   
        
        {/* <div className="card__title">{props.title}</div>
        <p className="card__text">{props.content}.</p> */}
        <div className='btn-wrapper'>
            <button type="submit" form="form1" className="btn" onClick={editMode} >Edit</button>
            <button className="btn" onClick={() => deletePost(props._id)} >Delete</button>
           
        </div>    
       </form>
      </div> 
    </div>
  </div>

   
  </div>
  
    
  )
}

export default Post