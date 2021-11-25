import React from "react";

import { CardContainerRepo } from "./style";

function CardRepos({ repoData }) {  
  return (
    <CardContainerRepo color="#A373C6">
      <a href={repoData.html_url}>
        <img src={repoData.owner.avatar_url} alt="" />
      </a>
      <div className="card-info-repos">
        <span>Nome: {repoData.name}</span>
        <span>
          {repoData.language ? `Linguagem: ${repoData.language}` : ""}
        </span>
      </div>
    </CardContainerRepo>
  );
}

export default CardRepos;