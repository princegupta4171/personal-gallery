import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {


    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        axios.post("http://localhost:3000/creat-post" , formData)
        .then((res)=>{
             alert("post created succesfully")
            
            navigate("/feed")
            
        })
        .catch((err)=>{
            console.log(err)
            alert("failed to create post")
            
            
            
        })
    }


  return (
   
        <div className='create-post-section'>
         <h1>Create Post</h1>

        <form onSubmit={handleSubmit}>
         <input type="file" name="image" accept="image/*" />
         <input type="text" name="caption" placeholder='enter caption' required />
         <button type="submit">SUBMIT</button>
         </form>
        
    </div>
        
 
  )
}

export default CreatePost
