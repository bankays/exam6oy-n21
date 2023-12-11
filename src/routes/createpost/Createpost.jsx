import React, { useEffect, useState } from "react";
import "./Createpost.css";
import axios from "axios";
const Createpost = () => {
  const [select, setSelect] = useState("");
  const [category, setCategory] = useState([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [categorys, setCategorys] = useState("");
  const [description, setDescription] = useState("");
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://ill-pink-coati-tie.cyclic.app/api/categories"
      );
      setCategory(response.data.data);
      // console.log(response.data);
    };
    fetchData();
  }, []);

  const handlcreatepost = (e) => {
    e.preventDefault();

    axios
      .post(`https://ill-pink-coati-tie.cyclic.app/api/posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        title,
        description,
        categorys,
        url,
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handlcreatepost}>
        <label className="inp-l-1" htmlFor="1">
          Post
        </label>
        <input
          id="1"
          className="inp-1"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label className="inp-l-2" htmlFor="2">
          Post image
        </label>
        <input
          id="2"
          className="inp-2"
          type="url"
          value={url}
          required
          onChange={(e) => setUrl(e.target.value)}
        />
        <select
          onChange={(e) => setCategorys(e.target.value)}
          value={categorys}
          required
          className="inp-3"
          id=""
        >
          <option>select category</option>
          {category.map((cat) => (
            <option value={cat._id}>{cat.title}</option>
          ))}
        </select>
        <label className="inp-l-4" htmlFor="4">
          Post description
        </label>
        <input
          id="4"
          className="inp-4"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button className="btnq" type="submit">
          Create{" "}
        </button>
      </form>
    </div>
  );
};

export default Createpost;
