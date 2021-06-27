# Github Explorer

<p align="center">
  <img src="https://github.com/reprograma/On10-TodasEmTech-RevisaoAPI/blob/main/screenshoots/preview.png" width=800 height=400/>
</p>

## Mapa da Aula de Revisão

Nessa aula além de revisar alguns pontos sobre ambiente, ciclos no react e API, iremos desenvolver um projeto juntas consumindo a tão temida API do Github, usando atenticação.


### Introdução

- [ ] Git Remote vs Git Clone
- [ ] Instalação Limpa do React
- [ ]  NPM e Yarn
- [ ] Package: Scripts, Dependências
- [ ] Dependências e Dicas: DotEnv, React Icons, Input Mask, Etc
- [ ] React Scripts: Live Reload
- [ ] Variáveis de Ambiente
- [ ] Dica CSS: Flexbox, Medidas Relativas e Clamp()
- [ ]  Entendendo Estruturação HTML dentro de um Loop

### Mão na Massa

- [ ] Explicação Estrutura do Projeto que será Desenvolvido
- [ ] Entendendo Estado e LifeCycle no React
- [ ] Manipulando Arrays & Objetos com `useState` e `useEffect`
- [ ] Entendendo Principais Conceitos API's
- [ ] Estruturando Axios
- [ ] Autenticação Github
- [ ] Implementando Chamadas à API do Github
- [ ] Tratamento de Erros (Catch)


## Guia de Instalação

Antes de qualquer coisa, você precisa ter instaldo o [`NPM & Node`](https://nodejs.org/en/) + [`Git`](https://git-scm.com/). Para Instalar o  siga o passo a passo de cada link listado abaixo:


- [`NPM & Node`](https://nodejs.org/en/)
- [`Git`](https://git-scm.com/)
- [`Yarn`](https://yarnpkg.com/)

agora sim, abra o seu terminal e rode os seguintes comandos em suas respectivas ordens:  

- `git clone https://github.com/reprograma/On10-TodasEmTech-RevisaoAPI.git` 
- `cd helpper-webapp` 
- `yarn` (ou, caso não tenha o yarn instalado, `npm install`)
- `yarn start` or `yarn dev` (ou, caso não tenha o yarn instalado, `npm start`  )

## Resumão State e Lifecycle no React

- Dentro do `useState` você tem uma função usada pra armazenar informação e uma propriedade usada para exibir essa informação armazenada. Quando você faz a desestruturação como no exemplo abaixo o primeiro valor é sempre o de exibição e o segundo é a função que armazena. Exemplo:

    ```jsx
    const [usuario, setUsuario] = useState([])
    ```

- Quando estiver usando o `useState` e precisar atualizar um estado baseado em seu valor anterior, como por exemplo, em uma função de toggle onde a cada clique o estado alterna entre true e false, opte pela sintaxe de função como no exemplo abaixo:

    ```jsx

    //contador
    const [contador, setContador ] = useState(0);

    return(
    	<>
    		<h1>{contador}</h1>
    		<button 
    			onClick={() => {
    				setContador(prevState => {
    					return prevState++;
    				})
    			}
    		>Adicionar</button>
    	</>
    );
    ```

(principalmente em hooks com arrays de dependência, que
veremos mais a frente), , como neste exemplo

- Quando você quiser que ao seja exercutado apenas quando a página é executada uma vêz você pode usar o `useEffect` com `[]` dps da função.

    ```jsx
    useEffect(() => {
    	...
    }, []);
    ```

    se você não usar `[]` ele irá executar o que está dentro do seu escopo toda vez que um estado (`useState`) for atualizado

- O `[]` utilizado após a função é pra adicionar estados ou funções de dependências. Ou seja, tudo que ta no escopo do `useEffect` irá rodar novamente quando aquele valor especificado dentro do `[]` for atuailizado. Exemplo:

    ```jsx
    const [name, setName] = useState('Raissa');

    useEffetc(() => {
    	console.log("funcionou");
    }, [name]);

    //Toda vez que name for alterado, esse console.log será disparado
    ```

- Existe uma recomendação também pra toda variável que você tiver dentro do escopo do useEffect você passar dentro desses `[]`
- Requisição async dentro do `useEffect`:
    - não é recomendado transformar ela numa async como no exemplo abaixo:

        ```jsx
        useEffetc(async () => {
        	console.log("funcionou");
        });
        ```

    - Há três possibilidades de fazer uma requisição assincrona, seguem elas:

        ```jsx
        useEffetc(() => {
        	fetch('https://api.com.br/users')
        		.then(resposta => {
        			console.log(resposta.data);
        		})
        		.catch(err => {
        				console.log('Deu errado')
        		})
        });

        useEffetc(() => {
        	async function load(){
        		try {
        			await resposta= fetch('https://api.com.br/users');
        			console.log(resposta.data);
        		} catch(err){
        			console.log('Deu errado')
        		}
        	}

        	load();
        });

        //IIFE 
        useEffetc(() => {
        	(async () => {
        		try {
        			await resposta= fetch('https://api.com.br/users');
        			console.log(resposta.data);
        		} catch(err){
        			console.log('Deu errado')
        		}
        	})()
        });
        ```

    - Agora quando for algo que você quer usar ao desmontar o componente é só retornar a função como no exemplo abaixo:

        ```jsx
        useEffetc(() => {
        	return () => {
        		console.log("funcionou");
        	}
        });
        ```

    - Dá pra ter vários useEffect, é interessante um por função
