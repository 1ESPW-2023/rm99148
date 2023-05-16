

//Exercício
//Analisando o objeto que chega na página home através do localStorage faça com que somente se o objeto possuir conteúdo o usuário possa permanecer na página.
//Utilize os mesmos conceitos mostrandos agora de redirecionamento e validação de objetos.

//Recepcionando o objeto que logou no localStorage e imprimindo uma de suas propriedades.
const spanUser = document.querySelector("#user");
let usuario = JSON.parse(localStorage.getItem("usuario-validado"))
spanUser.innerHTML = usuario.nomeCompleto;