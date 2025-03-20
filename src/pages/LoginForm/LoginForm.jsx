import React, { useState } from "react";
import { auth } from "../../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import MyButton from "../../components/UI/button/MyButton";
import MyInput from "../../components/UI/input/MyInput";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ width: "90%", maxWidth: "800px", padding: "20px", border: "1px solid teal", boxSizing: "border-box" }}>
        <h2 style={{ textAlign: "center", color: "teal" }}>Login</h2>
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
          <MyInput type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <MyInput type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <MyButton type="submit" style={{ width: "35%", alignSelf: "center" }}>Login</MyButton>
        </form>
      </div>
    </div>
  );
}