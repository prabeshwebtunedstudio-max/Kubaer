// "use client";

// import { useState } from "react";
// import Login from "@/components/auth/Login";
// import Signup from "@/components/auth/Signup";
// import Head from "next/head";

// export default function RoleAuthPage({ params }) {
//   const { role } = params; // "user" or "admin"
//   const [isLogin, setIsLogin] = useState(true);

//   // optional: validate role
//   const validRoles = ["user", "admin"];
//   if (!validRoles.includes(role)) {
//     return <p>Invalid role</p>;
//   }

//   return (
//     <>
//       <Head>
//         <link rel="stylesheet" href="/assets/css/auth.css" />
//       </Head>

//       <div className="auth-page">
//         <div className="auth-container">
//           <h2 className="auth-title">KUBAER FINANCE - {role.toUpperCase()}</h2>
//           {isLogin ? (
//             <Login role={role} switchToSignup={() => setIsLogin(false)} />
//           ) : (
//             <Signup role={role} switchToLogin={() => setIsLogin(true)} />
//           )}
//         </div>
//       </div>
//     </>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import Head from "next/head";
import Login from "@/components/auth/Login";
import Signup from "@/components/auth/Signup";

export default function RoleAuthPage({ params: paramsPromise }) {
  // Unwrap params using React.use()
  const params = React.use(paramsPromise);
  const { role } = params; // now safe to access
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  // Redirect unauthorized access
  useEffect(() => {
    const validRoles = ["user", "admin"];
    if (!validRoles.includes(role)) {
      router.push("/user"); // redirect to user login if role invalid
    }
  }, [role, router]);

  const handleLogin = (data) => {
    if (role === "user") router.push("/");
    else if (role === "admin") router.push("/admin/dashboard");
  };

  const handleSignup = (data) => {
    if (role === "user") router.push("/");
    else if (role === "admin") router.push("/admin/dashboard");
  };

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/auth.css" />
      </Head>

      <div className="auth-page">
        <div className="auth-container">
          <h2 className="auth-title">KUBAER FINANCE - {role.toUpperCase()}</h2>
          {isLogin ? (
            <Login role={role} switchToSignup={() => setIsLogin(false)} onSubmit={handleLogin} />
          ) : (
            <Signup role={role} switchToLogin={() => setIsLogin(true)} onSubmit={handleSignup} />
          )}
        </div>
      </div>
    </>
  );
}

