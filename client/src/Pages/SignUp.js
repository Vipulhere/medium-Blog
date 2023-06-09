import React, { useState } from "react";
import SignUpImg from "../images/Login.jpg";
import NavBar from "../Components/NavBar";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [credentials, setCredentials] = useState({});
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const HandleImage = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      setFile(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const HandleSignUp = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://medium-backend-q3m4.onrender.com/api/auth/register",
        {
          ...credentials,
          img: file,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      const json = await res.data;
      setCredentials({ name: "", email: "", password: "" });
      if (json.success) {
        alert("Acccount created successfully!", "primary");
      } else {
        alert("Something went wrong!", "danger");
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };

  if (localStorage.getItem("token")) return <Navigate to="/" />;

  return (
    <div>
      <NavBar />
      <div className="d-flex justify-content-between align-items-center">
        <img src={SignUpImg} className="w-50" alt="img" />
        <form
          onSubmit={HandleSignUp}
          enctype="multipart/form-data"
          method="post"
          className="w-50"
        >
          <div className="fileInput">
            <label>
              Profile <span className="text-danger fw-bold">*</span>
            </label>
            <input
              type="file"
              name="file"
              id="file"
              className="form-control"
              // onChange={(e) => setFile(e.target.files[0])}
              onChange={HandleImage}
            />
          </div>
          <div>
            <label>Name</label>
            <input
              type={"text"}
              id="name"
              className="form-control"
              placeholder="test"
              value={credentials.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type={"email"}
              id="email"
              className="form-control"
              placeholder="test@gmail.com"
              value={credentials.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mt-2">
            <label>Password</label>
            <input
              type={"password"}
              id="password"
              className="form-control"
              value={credentials.password}
              placeholder="Password"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button className="btn btn-warning mt-2" type="submit">
            Sign Up
          </button>
          <p className="text-center mt-3">
            Already a member ?{" "}
            <Link to="/login" className="text-primary fw-bold">
              Login
            </Link>{" "}
            now!
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
