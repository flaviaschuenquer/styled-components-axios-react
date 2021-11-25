import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../service/api";

import Titulo from "../../components/Titulo";
import CardRepo from "../../components/CardRepo";

import loadingGif from "../../assets/gif/loading.gif";

import { ContainerCards } from "./style";

function Repositorios() {
  const [reposData, setReposData] = useState([]);
  const [reposFiltrados, setReposFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);
  const { login } = useParams();

  useEffect(() => {
    const request = async () => {
      const response = await api.get(`users/${login}/repos`).catch((err) => {
        alert(err.message);
      });
      if (response) {
        if (response.status === 200) {
          setReposData(response.data);
          setLoading(false);
        }
      }
    };
    request();
  }, [login]);

  function handleSearch(search) {
    const novaColecao = reposData.filter((repo) =>
      repo.name.toLowerCase().includes(search.toLowerCase())
    );
    setReposFiltrados(novaColecao);
  }

  if (loading) {
    return <img src={loadingGif} alt="loading" />;
  }
  console.log("Renderizou...")

  return (
    <>
      <Titulo>Repositorios</Titulo>
      <input type="text" onChange={(e) => handleSearch(e.target.value)} />
      <ContainerCards>
        {reposFiltrados.length === 0
          ? reposData.map((repo, index) => {
              return <CardRepo key={index} repoData={repo} />;
            })
          : reposFiltrados.map((repo, index) => {
              return <CardRepo key={index} repoData={repo} />;
            })}
      </ContainerCards>
    </>
  );
}

export default Repositorios;