import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

import './styles.css';

const Card = () => (
    <article className="card">
        <div className="col-9">
            <h2>alura</h2>
            <p>Projetos desenvolvidos durante os curso da Alura :)"</p>
            <span>Ultima Atualização em 21/02/2019</span>
        </div>
        <div className="col-3">
            <IoIosArrowForward />
        </div>
    </article>
    
);

export default Card;