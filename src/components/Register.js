import React, { useState } from "react";
import api from "../api";

const Register = () => {
  const [person_name, setPersonname] = useState("");
  const [company_name, setCompanyname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await api.register(person_name, company_name, email, password);
      alert("Registration successful");
    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Personname"
        value={person_name}
        onChange={(e) => setPersonname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Companyname"
        value={company_name}
        onChange={(e) => setCompanyname(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
