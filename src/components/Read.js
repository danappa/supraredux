import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  function getData() {
    axios
      .get("https://64d77f512a017531bc134cd2.mockapi.io/post")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://64d77f512a017531bc134cd2.mockapi.io/post/${id}`)
      .then(() => {
        getData();
      });
  }

  function setToLocalStorage(id, name, email) {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>Read operation</h2>
      <Link to="/">
        <button className="btn btn-primary" class="w-25 p-3" >Add </button>
      </Link>
      <table class="table">
        <thead class="p-0 mb-2 bg-secondary text-white">
          <tr>
            <th scope="col" class="border">#</th>
            <th scope="col" class="border">Name</th>
            <th scope="col" class="border">Email</th>
            <th scope="col" class="border"></th>
            <th scope="col" class="border"></th>
          </tr>
        </thead>
        <tbody class="p-5 mb-2 bg-secondary text-white" >
          {data.map((eachData) => (
            <tr >
              <th scope="row" class="border">{eachData.id}</th>
              <td class="border">{eachData.name}</td>
              <td class="border">{eachData.email}</td>
              <td class="border">
                <Link to="/update">
                  <button  
                    className="btn-success" class="p-3 mb-1 bg-success text-white " 
                    onClick={() =>
                      setToLocalStorage(
                        eachData.id,
                        eachData.name,
                        eachData.email
                      )
                    }
                  >
                    edit
                  </button>
                </Link>
              </td>
              <td class="border"  >
                <button
                  className="btn-danger" class="p-3 mb-1 bg-danger text-white " 
                  onClick={() => handleDelete(eachData.id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Read;
