//exemplo de funções
const divElement = document.getElementById("div-box")

//divElement.addEventListener("click", ()=>{
//    console.log(divElement);
//});

divElement.addEventListener("click", mostraElemento);

function mostraElemento(params) {
    console.log(divElement)
}

function soma() {
    let n1 = 10
    let n2 = 5
    console.log(n1 + n2)
}

//soma()