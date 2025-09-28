

// "use client";

// const Signup = ({ switchToLogin }) => {
//   return (
//     <form className="auth-form">
//       <h3>Sign Up</h3>
//       <input type="text" placeholder="Full Name" required />
//       <input type="email" placeholder="Email" required />
//       <input type="password" placeholder="Password" required />
//       <button type="submit" className="btn-default w-full">Sign Up</button>
//       <p className="switch-text">
//         Already have an account?{" "}
//         <span onClick={switchToLogin}>Login</span>
//       </p>
//     </form>
//   );
// };

// export default Signup;

"use client";

const Signup = ({ switchToLogin, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name: e.target.name?.value,
      email: e.target.email.value,
      password: e.target.password.value
    });
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <input type="text" name="name" placeholder="Full Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit" className="btn-default w-full">Sign Up</button>
      <p className="switch-text">
        Already have an account?{" "}
        <span onClick={switchToLogin}>Login</span>
      </p>
    </form>
  );
};

export default Signup;

