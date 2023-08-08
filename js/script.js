// alert("Hello World")
// console.log("Só quem é dev vai descobir")
// area de registro
// VAR
// LET
// CONST
// query=pesquisa, seletor
let nome = document.querySelector("#nome")

function exibirnome(){
    console.log(nome.value)
    if(nome.value == ""){
        nome.style.border = "2px solid red"
    }
    else{
        nome.style.border = "2px solid green"
    }
}

nome.addEventListener("blur",exibirnome)
// o addEventListener cria um evento para algum elemento, no caso estamos utilizando o evento "blur", que é qaundo o foco sai de um campo.

// nome.addEventListener("focus", function(){
//     nome.value = "Este campo não deve ficar vazio"
// })

let idade = document.querySelector("#idade")

idade.addEventListener("blur", function(){
    if(idade.value >= 18){
        alert("Você possui 18 anos ou mais!")
    }
    else{
        alert("infelizmente você não é de maior")
        // essa função irá redirecionar o usuario para um link predeterminado.
        window.location.href = "https://getbootstrap.com/docs/5.3/components/card/"
    }
})

let endereco = document.querySelector("input[name=endereco]")

endereco.addEventListener("blur", function(){
    console.log(endereco.value.length)
    if (endereco.value.length >= 35){
        alert("Texto demasiadamente grande")
        endereco.style.border = "2px solid red"
    }
    if(endereco.value == ""){
        endereco.style.border = "2px solid red"

    }
    else { 
        alert("endereço OK!")
        endereco.style.border = "2px solid yellow"
    }
})

// keyup vai pegando o que vamos digitamos
let email = document.querySelector("#email")
let confirmar = document.querySelector("#confirmar")

let minusculo = email.value.toLowerCase()
//  O método toLowerCase() retorna o valor da string original convertido para minúsculo.

email.addEventListener("keyup", function(){
    confirmar.value = email.value
    
    if(minusculo.indexOf("@") == -1 || minusculo.indexOf(".com") == -1){
        email.style.border = "2px solid red"
    }
    else{

    }

    console.log(email.value.indexOf("@"))
    // indexOf("caractere") retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
})

// ( || pipe pipe)