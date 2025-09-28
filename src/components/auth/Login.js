

// "use client";

// const Login = ({ switchToSignup }) => {
//   return (
//     <form className="auth-form">
//       <h3>Login</h3>
//       <input type="email" placeholder="Email" required />
//       <input type="password" placeholder="Password" required />
//       <button type="submit" className="btn-default w-full">Login</button>
//       <p className="switch-text">
//         Don’t have an account?{" "}
//         <span onClick={switchToSignup}>Sign up</span>
//       </p>
//     </form>
//   );
// };

// export default Login;

"use client";

const Login = ({ switchToSignup, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can collect form data here
    onSubmit({ email: e.target.email.value, password: e.target.password.value });
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit" className="btn-default w-full">Login</button>
      <p className="switch-text">
        Don’t have an account?{" "}
        <span onClick={switchToSignup}>Sign up</span>
      </p>
    </form>
  );
};

export default Login;
