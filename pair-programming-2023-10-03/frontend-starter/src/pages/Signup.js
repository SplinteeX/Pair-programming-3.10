import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { useField } from "../hooks/useField";
import { set } from "mongoose";

const Signup = () => {
  const emailInput = useField("email");
  const passwordInput = useField("password");
  const passwordInput2 = useField("password");
  const nameInput = useField("text");

  const { Signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    if (passwordInput.value === passwordInput2.value) {
      e.preventDefault();
      await Signup(nameInput.value, emailInput.value, passwordInput.value);
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <label>Name:</label>
      <input {...nameInput} />
      <label>Email address:</label>
      <input {...emailInput} />
      <label>Password:</label>
      <input {...passwordInput} />
      <label>Confirm password:</label>
      <input {...passwordInput2} />

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
