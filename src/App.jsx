import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./routes/route/Product";
import Sign from "./routes/signup/Sign";
import Login from "./routes/login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./routes/profile/Profile";
import Createpost from "./routes/createpost/Createpost";
import Managepost from "./routes/managepost/Managepost";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-view/:id" element={<Product />} />
        <Route path="sign" element={<Sign />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />}>
          <Route path="profile/create" element={<Createpost />} />
          <Route path="profile/manage" element={<Managepost />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
