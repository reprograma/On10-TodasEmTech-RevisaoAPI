# Github Explorer

<p align="center">
  <img src="https://github.com/reprograma/On10-TodasEmTech-RevisaoAPI/blob/main/screenshoots/preview.png" width=800 height=400/>
</p>

### Aulas Extras que Gravei

Recomendo assistir na ordem em que se encontra, a do github é um complemento da primeira

- [Aula Gravada de API com Autenticação Clique Aqui](https://drive.google.com/file/d/1-53e9g9G2KQ8lkSg2VhcdfWiLkGPLG3b/view?usp=sharing)

- [Integração API do Github Clique Aqui](https://drive.google.com/file/d/1pywLGDnM1TbWxJTWYZCyofuc6iPY_YF3/view?usp=sharing)

## Guia de Instalação

Antes de qualquer coisa, você precisa ter instaldo o [`NPM & Node`](https://nodejs.org/en/) + [`Git`](https://git-scm.com/). Para Instalar o  siga o passo a passo de cada link listado abaixo:


- [`NPM & Node`](https://nodejs.org/en/)
- [`Git`](https://git-scm.com/)
- [`Yarn`](https://yarnpkg.com/)

agora sim, abra o seu terminal e rode os seguintes comandos em suas respectivas ordens:  

- `git clone https://github.com/reprograma/On10-TodasEmTech-RevisaoAPI.git` 
- `cd On10-TodasEmTech-RevisaoAPI` 
- `yarn` (ou, caso não tenha o yarn instalado, `npm install`)
- `yarn start` or `yarn dev` (ou, caso não tenha o yarn instalado, `npm start`  )

# Material pra Estudo

Vou deixar aqui por escrito o que será abordado na aula, importante revisar quantas vezes forem necessária e qualquer dúvida fiquem a vontade pra me contactar. Bons entudos :)

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
        			const resposta = await fetch('https://api.com.br/users');
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
        			const resposta= await fetch('https://api.com.br/users');
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


## Resumão API

### Entendendo a Comunicação

É importante entender que `requisição` é quando você acessa uma URL. `resposta` é o que ela te devolve.

### Endpoint

`Base URL`: Esse é o início da URL da requisição, aqui você basicamente falará a informação de domínio que se repete em qualquer requisição. Por exemplo, [http://localhost:3000](http://localhost:3000) ou [https://api.gastronomia.com](https://api.minhagastronomia.com/) 

`Resource` ou `Path`: O recurso é o tipo de informação que você está buscando, ou seja, vamos simular que estamos buscando saber sobre vinhos, então acrescentamos o recurso vinhos, por exemplo, https://api.gastronomia.com/vinhos 

`Query String`: A query string são os parâmetros de filtro daquela requisição. Geralmente usado pra filtrar buscas por algum atributo (informação). Como por exemplo, se eu quisesse saber os vinhos da região sul do Brasil, eu incluiria esses parâmetros ?pais=brasil&regiao=sul e nossa URL ficaria assim: https://api.gastronomia.com/vinhos?pais=brasil&regiao=sul

Entretanto, a Query String não é usada apenas pra filtros, ela pode ser utilizada para parametros de paginação, versionamento, ordenação e muito mais.

### Métodos HTTPS

O HTTP, ou, HyperText Transfer Protocol é o protocolo de comunicação de dados do mundo da internet(Web). Em outras palavras, ele facilita e define os padrões de comunicação dos dados entre um Webbrowser e um Web server.

Quando falamos de **métodos** eles basicamente são ações permitidas dentro de uma API. E ao falar de **códigos de status, eles são os retornos padrões de uma API.** E ambos fazem parte das definições do protocolo HTTP.

O método te ajuda a informar o tipo de ação que você está fazendo naquela requisição. Dentre os principais métodos, temos:

- `GET` (Buscar dados)
- `POST` (Enviar dados)
- `PUT` (Atualizar dados)
- `DELETE` (Deletar dados)
- `PATCH` (Alterar um dado específico)

Há outros métodos, caso queira conferir você pode [clicar aqui](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods).

### Headers

Também conhecidos como cabeçalhos, permitem que você envie informações adicionais na requisição. Ele pode ser utilizado para inúmeras funções, como: autenticação, formatação de objeto, e muito mais. Para utilizá-lo é simples você coloca a propriedade, seguido dois pontos e o valor, tudo entre aspas, exemplo:

```json
"Authorization": "token123242343534"
```

Não é recomendado que você crie headers customizados, e aqui você pode ver todos os [padrões de utilização.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

### Body

O body é o corpo da mensagem que você quer enviar na requisição. Ou seja, são as informações que você quer enviar para a requisição e ela pode ser em diferentes formatos, mas os mais comuns são JSON e XML.

Ele é utilizado somente nos métodos de POST, PUT, PATCH, ou seja, ele contém o dado a ser processado pela API, e por isso ele não é necessário em métodos de leitura de dados.

### HTTP Status Codes

Para facilitar o entendimento das respostas das APIs existem padrões de códigos de status que podem ser utilizados. 

Como padrão, os códigos de sucesso tem o prefixo **20x**, os de redirecionamento **30x**, os de erro do cliente **40x** e os de erro de servidor **50x**.

Os códigos mais utilizados para as respostas de uma requisição são o **200 (OK), o 201 (created), o 204 (no content), o 404 (not found), o 400 (bad request), e 500 (internal server error).**

Existem vários outros códigos de resposta do protocolo HTTP que podem ser utilizados. Nesse [link](https://www.restapitutorial.com/httpstatuscodes.html) temos a lista completa.

### Autenticação

Para fazer requisições para algumas API's é necessário estar autorizado. Essa autorização pode ser obtida de varias formas. Geralmente na documentação da API é indicado como fazer a autenticação e obter essa autorização já que cada API possui sua própria forma de se autenticar. 

Como principais métodos de autenticação de APIs, temos:

- `Basic authentication`: O cliente envia uma requisição com o header (Authorization) que contém a palavra Basic e o nome de usuário e senha, separados por dois pontos (:) no formato de base64. Exemplo:

    ```json
    "Authorization": "Basic dGhpYWdvOnRoaWFnb0AxMjM="
    ```

    Como o formato base64 é muito fácil de ser decodificado, a `basic authentication` só é recomendada quando são utilizados outros complementos de segurança, como por exemplo, o certificado HTTPS.

    Em que é substituido o usuário e senha por um token, mas isso é exceção e não é recomendado.

- `API Keys`: Basicamente o servidor gera uma chave de acesso única para o client (quem está fazendo a requisição), e para utilizar a API, o client envia essa chave única em toda requisição. É bem simples de implementar, o único problema é que esse método serve apenas para autenticação, e não para autorização. Ou seja, um usuário com uma Key válida tem acesso a todos os recursos da API. Essa chave é enviada no Header (cabeçalho) como o exemplo abaixo:

    ```json
    "Api-key": "rai123456"
    ```

    Vale ressaltar que o parâmetro de header pode variar de acordo com a API, ou seja, pode ser "x-Api-key" por exemplo, ou então, pode ser que o envio dessa key seja via Query String, e não pelo header, algo menos seguro ainda, pois fica extremamente visível para quem vai atacar.

- `OAuth`: Ele é extremamente útil para o processo de autenticação e autorização, e por isso, atualmente é o método mais recomendado para o cenário de APIs. Ele não é apenas um método de autenticação, e sim um protocolo completo com diversas especificações de segurança.

    Vamos entender alguns conceitos básicos do OAuth 2:

    - Resource Owner: entidade dona do recurso, ou seja, que é capaz de controlar o acesso a um recurso. Normalmente é o próprio usuário.
    - Resource Server: servidor que possui os recursos, e por sua vez, recebe as requisições.
    - Authorization Server: servidor que gera tokens de acesso para permitir que o client acesse os recursos autorizados pelo resource owner.
    - Client: aplicação que acessa os recursos do resource server.

    Para entender melhor, vamos supor que você desenvolveu uma aplicação que utiliza dados do usuário do Facebook, então vamos simular como seria um fluxo básico de autenticação via OAuth 2.0:

    1. O usuário acessa seu site ou app que teria um botão de "integre ao facebook", sendo que o seu site ou app seria o **client**.
    2. Ao clicar no botão, o usuário é redirecionado para a tela de login do Facebook (**authorization server**).
    3. Após o usuário informar as credenciais, o Facebook fornece um código de acesso ao **client**.
    4. Então o **client** solicita autorização aos recursos (endpoints da API do Facebook) para o **resource owner** (que é o próprio usuário) ****enviando ****o código de acesso recebido anteriormente.
    5. O **authorization server** por sua vez, verifica se o código de acesso é valido, e caso positivo, ele gera um token de acesso para retornar ao **client**.
    6. Por último, agora que o **client** já tem o token de acesso e autorização aos recursos, então a cada requisição, o **resource server (API do facebook)** irá responder com os dados protegidos.

    Interresante pesquisar sobre `OpenID Connect` e `JWT`
    
    # Vamos nos Conectar
    
    Vocês podem me encontrar nas redes sociais abaixo, fiquem a vontade pra tirar dúvidas técnicas, de carreira ou até mesmo bater papo
    
    - [Linkedin](https://linkedin.com/in/raissaqueiroz)
    - [Github](https://github.com/raissaqueiroz)
    - [Instagram](https://www.instagram.com/raissadev/)
    - [Twitter](https://twitter.com/raissadev)       
    
