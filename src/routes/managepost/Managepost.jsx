import React, { useEffect, useState } from "react";
import "./Managepost.css";
import axios from "axios";
import { Link } from "react-router-dom";
const Managepost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const response = await axios.get(
        "https://ill-pink-coati-tie.cyclic.app/api/posts"
      );
      setPosts(response.data.data);
    };

    loadPosts();
  }, [posts]);
  return (
    <div className="l">
      {posts.map((post) => (
        <div className="card3" key={post.id}>
          <img src={post.image} alt="" />
          <p className="p22">{post.category}</p>
          <p className="p33">{post.title}</p>
          {/* <button id={post._id} onClick={(e) => deleteProducts(e.target.id)}>
            delete
          </button> */}
          <button>delete</button>
        </div>
      ))}
    </div>
  );
};

export default Managepost;
