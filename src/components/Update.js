import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";



const Update = () => {
    const [id,setId]=useState("0");
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    }, [])

    const navigate=useNavigate();

    const handleUpdate=(e)=>{
        e.preventDefault();
      axios.put(`https://64d77f512a017531bc134cd2.mockapi.io/post/${id}`,
      {
        name:name,
        email:email
      }).then(()=>{
        navigate("/read");
      })
    }


  return (
    <>
      <h2>Update</h2>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleUpdate}
        >
          Update
        </button>
      </form>
    </>
  );
};

export default Update;
