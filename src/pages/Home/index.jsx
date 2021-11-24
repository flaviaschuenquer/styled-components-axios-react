import React, { useState } from "react";
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
        : userData.slice(0).reverse().map((user, index) => {
            return <Card key={index} user={user} />;
          })}
    </>
  );
}

export default Home;