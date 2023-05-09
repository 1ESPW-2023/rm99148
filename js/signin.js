"use strict";

//CRIANDO UM OBJETO
const usuario1 = {
    nomeUsuario:"pt001",
    senhaUsuario:"12345"
}

const usuario2 = {
    nomeUsuario:"pt002",
    senhaUsuario:"12345"
}

//CRIAR UMA LISTA DE OBJETOS
let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);

//Adicionando a lista de OBJETOS no localStorage
localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));


addEventListener("click", (evt)=>{
    if(evt.target.id == "btnSubmit"){

        let usuarioInput = document.querySelector("#usuario").value;
        let senhaInput = document.querySelector("#senha").value;

        try{

            let listaUser = JSON.parse(localStorage.getItem("listaUser"));

            listaUser.forEach((usuario)=>{

                if(usuarioInput == usuario.nomeUsuario && senhaInput == usuario.senhaUsuario){
                    throw "USUÁRIO VALIDADO!";
                }
            });
            throw "SENHA OU NOME DE USUÁRIO INVÁLIDO!";
        }catch(err){
            if(err == "USUÁRIO VALIDADO!"){
                console.log("USUÁRIO VALIDADO!");
            }else{
                console.log("SENHA OU NOME DE USUÁRIO INVÁLIDO!");
            }
        }
           


    }
});