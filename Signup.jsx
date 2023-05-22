import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/signup", {
          name,
          email,
          password,
          wins: Math.floor(Math.random() * 10) + 5,
          loses: Math.floor(Math.random() * 10) + 5,
          kills: Math.floor(Math.random() * 100) + 50,
          deaths: Math.floor(Math.random() * 50) + 1,
          assists: Math.floor(Math.random() * 20) + 5,
          headshots: Math.floor(Math.random() * 10) + 20,
        })
        .then((res) => {
          if (res.data === "exists") {
            alert("User already exists");
          } else if (res.data === "not exists") {
            navigate("/login", { state: { id: email } });
          }
        })
        .catch((e) => {
          alert("Wrong input");
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <br />
      <h1>Sign Up Form</h1>
      <br />

      <form method="post">
        <input
          autoComplete="off"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
          name="name"
          type="text"
        />
        <br />
        <input
          autoComplete="off"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          name="email"
          type="email"
        />
        <br />
        <input
          autoComplete="off"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          name="password"
          type="password"
        />
        <br />
        <br />
        <input type="submit" onClick={submit} />
        <br />
        <br />
        <h3>У вас уже есть аккаунт?</h3>
        <Link to="/login">Войти</Link>
        <br />
        <Link to="/">Назад на главную</Link>
      </form>
    </div>
  );
}
