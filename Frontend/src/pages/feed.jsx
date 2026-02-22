import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: "1",
      image:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=80",
      caption: "Beautiful Nature",
    },
  ]);

  useEffect(() => {
    
       axios.get("http://localhost:3000/posts")
       .then((res)=>{
        setPosts(res.data.post)
       })

    },[])
       

  return (
    <div className="feed-section">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))
      ) : (
        <h1>No Posts Available</h1>
      )}
    </div>
  );
};

export default Feed;