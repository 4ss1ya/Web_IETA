import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

export default function Home() {
  const location = useLocation();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/home").then((res) => {
      setInfo(
        res.data.data.filter((user) => {
          return user.email === location.state.id;
        })
      );
    });
  }, []);

  return (
    <div className="profile">
      <h1>Profile</h1>
      {info.map((user) => (
        <div key={user.id}>
          <p>Имя: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Победы: {user.wins}</p>
          <p>Поражения: {user.loses}</p>
          <p>Убийства: {user.kills}</p>
          <p>Смерти: {user.deaths}</p>
          <p>Ассисты: {user.assists}</p>
          <p>Хедшоты: {user.headshots}</p>
          <p>
            Процент победы:{" "}
            {(user.wins / (user.wins + user.loses)).toFixed(4) * 100}%
          </p>
          <p>K/D: {(user.kills / user.deaths).toFixed(2)}</p>
        </div>
      ))}
      <br />
      <Link to="/">Назад на главную</Link>
    </div>
  );
}
