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
        window.location.href = "https://glaydson-alves.github.io/projeto-marketing-digital/"
    }
})

let endereco = document.querySelector("input[name=endereco]")

endereco.addEventListener("blur", function(){
    console.log(endereco.value.length)
    if (endereco.value != ""){

        if (endereco.value.length >= 35){
            alert("Texto demasiadamente grande")
            endereco.style.border = "2px solid red"
        }

        else { 
            alert("endereço OK!")
            endereco.style.border = "2px solid green"
        }}

    else {
        endereco.style.border = "2px solid red"
    }
    
})

// keyup vai pegando o que vamos digitamos
let email = document.querySelector("#email")
let confirmar = document.querySelector("#confirmar")

email.addEventListener("keyup", function(){
    
let minusculo = email.value.toLowerCase()
//  O método toLowerCase() retorna o valor da string original convertido para minúsculo.

    confirmar.value = email.value
    if(minusculo.indexOf('@') == -1 || minusculo.indexOf('.com') == -1){
        // ( || pipe pipe)
        console.log("Email inválido")
        // email.style.border = "1px solid red"
        email.classList.add("border-danger")
        email.classList.remove("border-success")
    }
    else{
        console.log("Email válido")
            // indexOf("caractere") retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.

        // email.style.border = "1px solid green"
        email.classList.add("border-success")
        email.classList.remove("border-danger")
         
    }
    console.log(email.value.indexOf("@"))
})
// SENHA

let senha = document.querySelector("#password")
let btn_olho = document.querySelector(".fa-eye")

//()=>{} isto é uma arrow function, ou seja, é uma versão resumida da função anônima
btn_olho.addEventListener("click", ()=>{
    if(btn_olho.classList.contains("fa-eye")){
        // console.log("A classe existe")
        btn_olho.classList.remove("fa-eye")
        btn_olho.classList.add("fa-eye-slash")

        // setAttribute serve para trocar o atributo de uma tag
        senha.setAttribute("type", "text")
    }
    else{
        // console.log("A classe não existe")
        btn_olho.classList.remove("fa-eye-slash")
        btn_olho.classList.add("fa-eye")

        senha.setAttribute("type", "password")
        
    }
})

// PEGANDO DADOS DO CAMPO RADIO

let escolaridade = document.querySelectorAll("input[name=escolaridade]")//querySelectorAll serve para pegar mais de uma tag com a mesma class ou atributo e o sem All é só pra uma tag
let btnEscolaridade = document.querySelector("#btnEscolaridade")

btnEscolaridade.addEventListener("click", (evento)=>{
    console.log(evento)
    evento.preventDefault()//Esta função irá impedir o comportamento padrão de botão
    //console.log(escolaridade[0])
    for(let itens of escolaridade){
        // console.log(itens)
        if(itens.checked){
            alert(`Sua escolaridade é ${itens.value}`) // isto é um template string, outra forma de contatenar. 
            // alert("Sua escolaridade é "+ itens.value)
            // let opcao = confirm("tem certeza?")
            // console.log(opcao)
        }
    }

    // for (let itens = 0; escolaridade < 3; itens ++){
    //     console.log(itens)
    // }
})

let escolha = document.querySelector("#escolha")
let contrato = document.querySelector("#contrato")
contrato.classList.add("d-none")

escolha.addEventListener("change", ()=>{
    if(escolha.checked){
        contrato.classList.remove("d-none")
        contrato.classList.add("d-block")
    }
    else{
        contrato.classList.remove("d-block")
        contrato.classList.add("d-none")
    }
})

let concordo = document.querySelector("#concordo")

concordo.addEventListener("change", ()=>{
    if(concordo.checked){
        alert("Parabéns!")
    }
    else{
        alert("Que pena!")
        let mensagem = prompt("diga porque desmarcou")// cria caixa de texto
        console.log(mensagem)
    }
})

let trabalho = document.querySelector(".form-select")

trabalho.addEventListener("change", ()=>{
    console.log(trabalho.options)

    for(let itens of trabalho){
        if(itens.selected){
            // console.log(itens.value)
            if(itens.value == "RH"){
                trabalho.style.background ="cyan"
                trabalho.style.color = "black"
            }
            if(itens.value == "tecnologia"){
                trabalho.style.background ="green"
                trabalho.style.color = "white"
            }
            if(itens.value == "fiananceiro"){
                trabalho.style.background ="red"
                trabalho.style.color = "white"
            }
            if(itens.value == ""){
                trabalho.style.background = "white"
                trabalho.style.color ="black"
            }
        }
    }
})

let cor = document.querySelector("#cor")
cor.addEventListener("change", ()=>{
    console.log(cor.value)
    document.body.style.backgroundColor = cor.value
})

let mensagem = document.querySelector("#mensagem")
let restante = document.querySelector("#restante")
let limite = 20

mensagem.addEventListener("keyup", ()=>{
    console.log(mensagem.value.length)
    restante.textContent = mensagem.value.length
    // textContent = faz alteração do texto

    mensagem.setAttribute("maxlength", limite)
    //console.log(restante.parentNode)

    if(restante.textContent == 20){
        mensagem.classList.add("border-danger")
        restante.parentNode.style.color = "red"
        // parentNode significa que estamos pegando o elemento(nó da árvore DOM) pai e fazendo a modificação através do mesmo id ou classe do filho. 
    }
    else{
        mensagem.classList.remove("border-danger")
        restante.parentNode.style.color = "black"
    }
})