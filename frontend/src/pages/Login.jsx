import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import "./Login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors, isSubmitting },
  } = useForm();

//   const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
    <Navbar/>
      <div className="Login-Container">
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Email"
            {...register("email", {
              required: { value: true, message: "Please fill" },
              minLength: { value: 3, message: "Min length is 3" },
              maxLength: { value: 20, message: "Max length is 20" },
            })}
            type="text"
          />
          {errors.email && <div className="error">{errors.email.message}</div>}

          <input
            placeholder="Password"
            {...register("password", {
              required: { value: true, message: "Please fill" },
              minLength: 8,
              maxLength: 15,
            })}
            type="password"
          />
          {errors.password && (
            <div className="error">{errors.password.message}</div>
          )}

          <input className="login-btn" disabled={isSubmitting} type="submit" value="login" />
        </form>
      </div>
    </>
  );
};

export default Login;
