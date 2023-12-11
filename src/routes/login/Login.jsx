import React, { useState } from "react";
import "./Login.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isvisiblePasword, setIsVisiblePasword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handlloginuser = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://ill-pink-coati-tie.cyclic.app/api/auth/login", {
        email,
        password,
      })
      .then((response) => {
        setLoading(false);
        if (response.status === 200) {
          toast.success("you logined success");
          localStorage.setItem("token", response.data.token);
          // localStorage.setItem("id", response.data.user.id);
          // console.log(response.data.user);
          navigate("/");
        }
        console.log(response);
      })
      .catch((error) => {
        setLoading(false);

        console.log(error);
        toast.error(error.response.data.message);
      });
  };
  return (
    <div>
      <div className="sign">
        <form className="auth-form" onSubmit={handlloginuser}>
          <div className="div">
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
              dont you have an account? <Link to="/sign">SignUp</Link>
            </p>
            <button type="submit" disabled={loading}>
              {loading ? "loading..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
