import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';


function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
      <Link to="/signup">← Go to Signup</Link>

      <div className="container">
        <div className="row">
        <div className="col-md-5  offset-md-3 bg-light shadow">
          <h2 className="text-center">Login</h2>
              <div className="login-form">
              <form 
                    onSubmit={handleFormSubmit}
                    action=""
                    className="mt-5 border p-4"
              >
                    <div className="row">
                      <div className="mb-3 col-md-12">
    
              
                      <label htmlFor="email">Email address:</label>
                      <input
                        placeholder="email@mail.com"
                        name="email"
                        type="email"
                        id="email"
                        onChange={handleChange}
                        className="form-control"
                      />
                  </div>
                <div className="mb-3 col-md-6">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="mb-3 col-md-12"></div>
                  {/*  */}
                  <button className="btn btn-primary float-end" type="submit">
                    Submit
                  </button>
                </div>
              </form>
              <p className="login">
              {" "}
                If you don't have a <span className="store-color">
                  Squid Store
                </span>{" "}
                account, please <Link to="/Signup"> SignUp </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* =======================xxxxxxxxxxxxxxxxx */}
    </div>
  );
}



export default Login;
