import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

import './styles.css';

const Card = ({ nome, descricao, url, data }) => (
    <a className="card" href={url} target="_blank" rel="noreferrer">
        <div className="col-9">
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <span>Ultima Atualização em {data}</span>
        </div>
        <div className="col-3">
            <IoIosArrowForward />
        </div>
    </a>
    
);

export default Card;