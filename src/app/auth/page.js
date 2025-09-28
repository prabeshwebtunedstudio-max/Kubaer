

"use client";
import { useState } from "react";
import Head from "next/head";
import Login from "@/components/auth/Login";
import Signup from "@/components/auth/Signup";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/auth.css" />
      </Head>
      <div className="auth-page">
        <div className="auth-container">
          <h2 className="auth-title">KUBAER FINANCE</h2>
          {isLogin ? (
            <Login switchToSignup={() => setIsLogin(false)} />
          ) : (
            <Signup switchToLogin={() => setIsLogin(true)} />
          )}
        </div>
      </div>
    </>
  );
}

