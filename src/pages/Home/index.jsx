import React, { useState } from "react";
import { Link } from "react-router-dom";

import api from "../../service/api";

import Titulo from "../../components/Titulo";
import Card from "../../components/Card";

function Home() {
  const [userData, setUserData] = useState([]);
  const [nomeUsuario, setNomeUsuario] = useState("");

  function handleSubmit() {
    api
      .get(`users/${nomeUsuario}`)
      .then((response) => {
        if (response.status === 200) {
          setUserData([...userData, response.data]);
          setNomeUsuario("");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <>
      <Titulo>Usuário GitHub</Titulo>
      <input
        type="text"
        value={nomeUsuario}
        onChange={(e) => setNomeUsuario(e.target.value)}
      />
      <button onClick={handleSubmit}>Pesquisar</button>
      {userData.length === 0
        ? ""
        : userData
            .slice(0)
            .reverse()
            .map((user, index) => {
              return (
                <Link key={index} to={`/repositorios/${user.login}`}>
                  <Card user={user} />
                </Link>
              );
            })}
    </>
  );
}

export default Home;