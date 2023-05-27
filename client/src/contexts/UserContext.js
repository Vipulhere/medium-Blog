import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../images/Spinner.gif";

const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  const [myblogs, setMyBlogs] = useState([]);
  const [blog, setBlog] = useState({});
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      try {
        setLoading(true);
        await FetchUser();
        setLoading(false);
      } catch (err) {
        // console.log(err);
        setLoading(false);
      }
    };
    FetchData();
  }, []);

  const FetchAllBlogs = async () => {
    const data = await axios.get(
      "https://medium-backend-q3m4.onrender.com/api/blogs/fetchallblogs"
    );
    setBlogs(data.data.blogs);
    // console.log(data.data)
  };

  // Fetch login user
  // const FetchUser = async () => {
  //   const data = await axios.get("https://medium-backend-q3m4.onrender.com/api/auth/getuser", {
  //     headers: { "Authorization": localStorage.getItem("token") },
  //   });
  //   setUser(data.data);
  // };


  const FetchUser = async () => {
    try {
      const response = await axios.get("https://medium-backend-q3m4.onrender.com/api/auth/getuser", {
        headers: { "Authorization": localStorage.getItem("token") },
      });
      const user = response.data;
      setUser(user);
    } catch (error) {
      console.error(error);
      // Handle the error appropriately, e.g., display an error message
    }
  };
  

  // Fetch user blogs
  const FetchBlogs = async () => {
    try {
      const response = await axios.get(
        "https://medium-backend-q3m4.onrender.com/api/blogs/fetchuserblogs",
        { headers: { "Authorization": localStorage.getItem("token") } }
      );
      const data = response.data;
      console.log(data);
      setMyBlogs(data);
    } catch (error) {
      console.error(error);
      // Handle the error appropriately, e.g., display an error message
    }
  };
  

  // Edit user
  const HandleEditUser = async (edit) => {
    try {
      await axios.put(
        `https://medium-backend-q3m4.onrender.com/api/auth/update/${edit?._id}`,
        edit,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token"),
          },
        }
      );
      FetchUser();
    } catch (err) {
      console.log(err.data);
    }
  };

  // Delete user
  const HandleDeleteUser = async (edit) => {
    try {
      await axios.delete(`https://medium-backend-q3m4.onrender.com/api/auth/delete/${edit._id}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token"),
        },
      });
      FetchUser();
    } catch (error) {
      console.error(error);
      // Handle the error appropriately, e.g., display an error message
    }
  };
  

  // Fetch Blog by Id
  const FetchBlogByID = async (id) => {
    try {
      const response = await axios.get(`https://medium-backend-q3m4.onrender.com/api/blogs/fetchblog/${id}`);
      const blog = response?.data[0];
      setBlog(blog);
    } catch (error) {
      console.error(error);
      // Handle the error appropriately, e.g., display an error message
    }
  };
  

  // Edit Blog
  const HandleEdit = async (edit) => {
    try {
      await axios.put(
        `https://medium-backend-q3m4.onrender.com/api/blogs/updateblog/${edit._id}`,
        edit,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token"),
          },
        }
      );
      FetchBlogs();
    } catch (error) {
      console.error(error);
      // Handle the error appropriately, e.g., display an error message
    }
  };
  

  // Delete Blog
  const HandleDelete = async (id) => {
    try {
      await axios.delete(`https://medium-backend-q3m4.onrender.com/api/blogs/deleteblog/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token"),
        },
      });
      FetchBlogs();
    } catch (error) {
      console.error(error);
      // Handle the error appropriately, e.g., display an error message
    }
  };
  

  if (loading) return <img src={Spinner} className="Loader" />;

  return (
    <UserContext.Provider
      value={{
        user,
        FetchAllBlogs,
        FetchUser,
        HandleEditUser,
        HandleDeleteUser,
        HandleEdit,
        HandleDelete,
        FetchBlogs,
        FetchBlogByID,
        myblogs,
        blog,
        blogs,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
