import { useLogin } from "../hooks/useLogin";
import { useField } from "../hooks/useField";

const Login = () => {
  const emailInput = useField("email");
  const passwordInput = useField("password");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(emailInput.value, passwordInput.value);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>

      <label>Email address:</label>
      <input {...emailInput} />
      <label>Password:</label>
      <input {...passwordInput} />

      <button disabled={isLoading}>Log in</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
