import React, {useState} from 'react'
import axios from 'axios'

function Newpost({ readPosts}) {

    const [formInput, setFormInput] = useState({
        title: '', content: ''
    })

    
    const sendToDB = () => {
       
        axios.post('https://tapio-exercise-api.herokuapp.com/api/createpost', {
            // title: inputValues.title,
            // content: inputValues.content,
            // img: inputValues.img
        })
            .then(() => {
                readPosts();
               
            })
            .catch(err => console.log(err));
    }

    const handleChange = (e) => {
        setFormInput({...formInput, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formInput)
        //sendToDB()
    }
  return (
    <div className="cards">

  <div className="cards__item">
    <div className="card">
      <div className="card__image"></div>
      <div className="card__content">

       <form onSubmit={handleSubmit}>
            <input className="card__title"
              placeholder="Enter title" 
              name='title'
              value={formInput.title}
               onChange={handleChange}
              />
    
            <textarea className="card__text"
              placeholder="Enter content"  
              name='content'
              value={formInput.content}
               onChange={handleChange}
              />
            
           
                <button className="btn">Post</button>
               
       </form>
        
      </div>
    </div>
  </div>

   
  </div>
  )
}

export default Newpost