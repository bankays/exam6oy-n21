import React, { useState } from "react";
import "./Sign.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
const Sign = () => {
  const navigate = useNavigate();
  const [isvisiblePasword, setIsVisiblePasword] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadin, setLoading] = useState(false);
  const handleCreateUser = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://ill-pink-coati-tie.cyclic.app/api/auth/signup", {
        firstname,
        lastname,
        email,
        password,
      })
      .then((response) => {
        setLoading(false);
        if (response.status === 201) {
          toast.success("user created successfully");
          navigate("/login");
        }
      })
      .catch((error) => {
        setLoading(false);
        // toast.error(error.response.data.errors[0].msg);
        console.log(error);
      });
  };
  return (
    <div>
      <div className="sign">
        <h1 className="logo">Logo</h1>
        <h1 className="titla">Sign up</h1>
        <form className="auth-form" onSubmit={handleCreateUser}>
          <div className="div">
            {" "}
            <input
              type="text"
              placeholder="firstname"
              required
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              type="text"
              placeholder="lastname"
              required
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <input
              type="email"
              placeholder="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="pasword-wraper">
              <input
                type={isvisiblePasword ? "text" : "password"}
                placeholder="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {isvisiblePasword ? (
                <FiEyeOff onClick={() => setIsVisiblePasword(false)} />
              ) : (
                <FiEye onClick={() => setIsVisiblePasword(true)} />
              )}
            </div>
            <p className="diod">
              did you have an account? <Link to="/login">login</Link>
            </p>
            <button className="btn-signup" type="submit" disabled={loadin}>
              {loadin ? "loading..." : "sign"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign;
