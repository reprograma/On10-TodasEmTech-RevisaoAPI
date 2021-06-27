import React from 'react';
import { MdLocationOn } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

import './styles.css';

const Sidebar = () => (
    <aside>
        <img src="https://avatars.githubusercontent.com/u/48663408?v=4" alt="Raissa Queiroz" />
        <h1>Raissa Queiroz</h1>
        <h3><em>@raissaqueiroz</em></h3>
        <p>Estudante e Desenvolvedor Front-end com o princípio de evoluir pelo menos 1% diariamente e poder contribuir com quem necessitar.</p>
        <ul>
            <li>
                <MdLocationOn/> Brasil, Rio de Janeiro - Duque de Caxias
            </li>
            <li>
                <FaLinkedinIn/> <a href="https://linkedin.com/in/raissaqueiroz">https://linkedin.com/in/raissaqueiroz</a>
            </li>
        </ul>
    </aside>
    
);

export default Sidebar;