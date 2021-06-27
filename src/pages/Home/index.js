import React, {useState, useEffect} from 'react';
import axios from 'axios';
import api from '../../services/api';

import './styles.css';

import Sidebar from '../../components/Sidebar';
import Card from '../../components/Card';

/**
 * EXPLICAÇÃO API
 * 
 * - .get() -> listar e buscar informações
 * - .post() -> enviar ou gravar informações
 * - .put() -> atualizar/Editar Informações
 * - .delete() -> deletar informações
 * 
 * axios.metodo(endpoint, body, config)
 * 
 * endpoint: url da requisição -> base url, path (recurso) e query strings
 * ex.: ?name=Raissa&idade=22&sobrenome=queiroz
 * 
 *  https://api.gastronomia.com/vinhos?pais=brasil&regiao=sul&page=5
 * 
 * body: corpo da requisição (só é enviado no post e no put). 
 * - É onde as informações que você ta enviando vai
 * ex.: 
 * {
 *      email: "example@example.com",
 *      senha: "example123"
 * }
 * 
 * config -> configurações específicas de requisição, como por exemplo o cabeçalho
 * ex.: 
 * {
 *      headers: {
 *          "Api-Key": "hakdhadhkahdahs"
 *      }
 * }
 * 
 * - Geralmente as chaves de autenticação vão dentro do header
 */

export default function Home(){
    const [usuario, setUsuario] = useState({
        nome: '',
        nome_usuario: '',
        biografia: '',
        endereco: '',
        linkedin: '',
        avatar: ''
    });
    const [respositorios, setRepositorios] = useState([]);

    // Informações do Usuário
    useEffect(() => {
        (async () => {
            try {
                const resposta = await api.get('/users/raissaqueiroz');
                setUsuario({
                    nome: resposta.data.name,
                    nome_usuario: resposta.data.login,
                    biografia: resposta.data.bio,
                    endereco: resposta.data.location,
                    linkedin: resposta.data.blog,
                    avatar: resposta.data.avatar_url
                });
            } catch(err){
                console.log('Deu errado')
            }
        })() 
        
        
    }, []);
   

    // Informações dos Repositórios
    useEffect(() => {
        (async () => {
            try {
                const resposta = await api('/users/raissaqueiroz/repos');
                setRepositorios(resposta.data);

            } catch(err){
                console.log('Deu errado')
            }
        })() 
    }, [])


    return(
        <section>
            <Sidebar dados={usuario} />
            <main>
                {
                    respositorios.map(repo => (
                        <Card 
                            key={repo.id}
                            nome={repo.name} 
                            descricao={repo.description} 
                            url={repo.html_url} 
                            data={repo.updated_at} 
                        />
                    ))
                }
            </main>
        </section>
    );
}