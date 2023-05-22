import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exists") {
            navigate("/home", { state: { id: email } });
          } else if (res.data === "not exists") {
            alert("User is not found");
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
      <h1>Login Form</h1>

      <form method="post">
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
        <input type="submit" onClick={submit} />
        <h3>У вас нет аккаунта?</h3>
        <Link to="/signup">Создайте новый</Link>
        <br />
        <Link to="/">Назад на главную</Link>
      </form>
    </div>
  );
}
