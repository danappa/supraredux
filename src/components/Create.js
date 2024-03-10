import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  // const header={"Access-Control-Allow-Origin": "*"};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios
      .post("https://64d77f512a017531bc134cd2.mockapi.io/post", {
        name: name,
        email: email,
        // ,
        // header
      })
      .then(() => {
        history("/read");
      });
  };

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <h2>
                {" "}
                Create <ContactEmergencyIcon />{" "}
              </h2>
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-between m-2">
                  <button
                    type="submit"
                    className="btn btn-primary justify-content-md-start"
                    onClick={handleSubmit} 
                  >
                    Submit
                    </button>
                  <Link to="/read">
                  <button className="btn btn-primary">show details</button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;