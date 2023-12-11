import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Profile.css";
import elipse from "../../assets/Ellipse 1.svg";
import axios from "axios";
import { toast } from "react-toastify";
const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState("null");

  useEffect(() => {
    axios
      .get(`https://ill-pink-coati-tie.cyclic.app/api/users`, {
        headers: {
          " Authorization": ` ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setProfile(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("profile/create");
  }, []);
  const handlLogout = () => {
    const isUseragreed = confirm("are you realy going to log out");
    if (isUseragreed) {
      localStorage.removeItem("token");
      toast.success("logout successfully ");
      navigate("/");
    }
  };
  return (
    <div className="profile">
      <div className="container">
        <div className="left">
          <p className="left-p1">Dashboard</p>
          <div className="aftor">
            {/* {profile && <img className="left-img" src={profile.image} alt="" />} */}

            <img className="left-img1" src={elipse} alt="" />
            {/* <p className="left-p2">{profile?.name}</p> */}
            <p className="left-p2">aziz</p>
            <p className="left-p3">auth</p>
          </div>
          <Link to="profile/create">
            <button className="btn1">Create Post</button>
          </Link>
          <Link to="profile/manage">
            <button className="btn2">Manage Post</button>
          </Link>
          <button className="btn3" onClick={handlLogout}>
            Sign out
          </button>
        </div>
        <div className="right">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;
