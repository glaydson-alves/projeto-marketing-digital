let tabela = document.querySelector("#table")

// async = é uma forma que o js tem de transformar uma função sícrona em assíncrona, muito utilizada em APIs
async function carregarDados(){
    const url = "https://jsonplaceholder.org/users"

    const resultado = await fetch(url)
    // await = esperar a resposta, so pode ser usada se a função for async
    // fetch = procura, busca
    const dados = await resultado.json()
    // Estamos convertendo todos os dados que estão vindo da api no formato json

    for (const item of dados) {
        // acessando as informações do vetor
        // *****CRIANDO ELEMENTOS EM HTML******
        const linha = document.createElement("tr")
        const tdNome = document.createElement("td")
        const tdEmail = document.createElement("td")
        const tdOcupacao = document.createElement("td")
        const tdTelefone = document.createElement("td")

        // Criando conteúdo nas colunas
        tdNome.textContent = item.firstname
        tdEmail.textContent = item.email
        tdOcupacao.textContent = item.company.bs
        tdTelefone.textContent = item.phone

        //ADICIONANDO OS ELEMENTOS EM SUAS TAGS
        linha.appendChild(tdNome)
        linha.appendChild(tdEmail)
        linha.appendChild(tdOcupacao)
        linha.appendChild(tdTelefone)
        //appendChild = adicione filhos

        tabela.appendChild(linha)
    }
    
}

carregarDados()