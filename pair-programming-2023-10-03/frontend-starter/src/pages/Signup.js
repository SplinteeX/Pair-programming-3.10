import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { useField } from "../hooks/useField";

const Signup = () => {
  const emailInput = useField("email");
  const passwordInput = useField("password");
  const nameInput = useField("text");

  const { Signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await Signup(nameInput.value, emailInput.value, passwordInput.value);
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

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
