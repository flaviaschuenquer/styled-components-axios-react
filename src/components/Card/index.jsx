import React from 'react';

import {CardContainer} from './style';

function Card({user}){       
    return (
        <CardContainer color='#7CDBFF'>
            <img src={user.avatar_url} alt=""/>
            <div className="card-info">
                <span>Nome: {user.name}</span>
                <span>Login: {user.login}</span>
            </div>
        </CardContainer>
    )
}

export default Card;