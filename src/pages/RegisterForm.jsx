import React, { useState } from "react";
import { auth } from "../services/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ width: "90%", maxWidth: "800px", padding: "20px", border: "1px solid teal", boxSizing: "border-box" }}>
        <h2 style={{ textAlign: "center", color: "teal" }}>Register</h2>
        <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
          <MyInput type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <MyInput type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <MyInput type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <MyButton type="submit" style={{ width: "50%", alignSelf: "center" }}>Register</MyButton>
          <p style={{ textAlign: "center" }}>Already have an account?</p>
          <MyButton
            type="button"
            onClick={goToLogin}
            style={{ width: "50%", alignSelf: "center"}}
          >
            Sign in
          </MyButton>
        </form>
      </div>
    </div>
  );
}