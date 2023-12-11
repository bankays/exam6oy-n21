import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import img1 from "../../assets/img1.png";
import elipse from "../../assets/Ellipse 1.svg";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://ill-pink-coati-tie.cyclic.app/api/posts"
      );
      setPosts(response.data.data);

      setLoading(false);
    };

    loadPosts();
  }, [posts]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1500 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1500, min: 900 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 900, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="home">
      <div className="container">
        <div className="hero1">
          <img className="img1" src={img1} alt="" />
        </div>
        <div className="cards">
          <p className="p1">All Products</p>
          <Carousel responsive={responsive}>
            {posts.map((post) => (
              <Link to={`/product-view/${post._id}`}>
                <div className="card" key={post.id}>
                  <img src={post.image} alt="" />
                  <p className="p2">{post.category}</p>
                  <p className="p3">{post.title}</p>
                  <div className="sss">
                    <img className="IMG" src={elipse} alt="" />
                    <p className="p4">Ibrokhim Jalalov</p>
                    <p className="p5">Author</p>
                  </div>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;
