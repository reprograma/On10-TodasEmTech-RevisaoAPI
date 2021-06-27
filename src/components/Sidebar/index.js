import React from 'react';
import { MdLocationOn } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

import './styles.css';

const Sidebar = ({ dados }) => (
    <aside>
        <img src={dados.avatar} alt={dados.nome} />
        <h1>{dados.nome}</h1>
        <h3><em>@{dados.nome_usuario}</em></h3>
        <p>{dados.biografia}</p>
        <ul>
            <li>
                <MdLocationOn/> {dados.endereco}
            </li>
            <li>
                <FaLinkedinIn/> <a href={dados.linkedin}>{dados.linkedin}</a>
            </li>
        </ul>
    </aside>
    
);

export default Sidebar;