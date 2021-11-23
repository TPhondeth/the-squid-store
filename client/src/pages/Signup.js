import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/login">← Go to Login</Link>

      <div className="container">
        <div className="row">
          <div className="col-md-5  offset-md-3 bg-light shadow">
            <h2 className="text-center">SignUp</h2>
            <div className="signup-form">
              <form
                onSubmit={handleFormSubmit}
                action=""
                className="mt-5 border p-4"
              >
                <div className="row">
                  <div className="mb-3 col-md-12">
                    <label htmlFor="firstName"> FirstName</label>
                    <input
                      placeholder="First"
                      name="firstName"
                      type="firstName"
                      id="firstName"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-md-12">
                    <label htmlFor="firstName"> LastName</label>
                    <input
                      placeholder="Last"
                      name="lastName"
                      type="lastName"
                      id="lastName"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3 col-md-12">
                    <label htmlFor="pwd"> Email</label>
                    <input
                      placeholder="email@mail.com"
                      name="email"
                      type="email"
                      id="email"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  {/* password */}
                  <div className="mb-3 col-md-12">
                    <label htmlFor="email"> Password</label>
                    <input
                      placeholder="******"
                      name="password"
                      type="password"
                      id="pwd"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  {/* button */}

                  <div className="mb-3 col-md-12"></div>
                  {/*  */}
                  <button className="btn btn-primary float-end" type="submit">
                    Submit
                  </button>
                </div>
              </form>
              <p className="signUp">
                {" "}
                If you have <span className="store-color">
                  Squid Store
                </span>{" "}
                account, Please <Link to="/login"> Login </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* =======================xxxxxxxxxxxxxxxxx */}
    </div>
  );
}

export default Signup;
