const listaClientes = () => { //conexão com a API
    return fetch(`http://localhost:3000/profile`)
        .then(resposta => {
            return resposta.json()
        })
}

const cadastraCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: { //objeto que especifica os cabeçalhos da requisição HTTP, indica o tipo de midia no corpo da requisiçao, nesse caso o json
            'content-type': 'application/json'
        },
        body: JSON.stringify({ //corpo da requisição HTTP, onde são enviados os dados.
            nome: nome,
            email: email,
        })
    })
        .then(resposta => {
            return resposta.body
        })
}

export const clienteService = {
    listaClientes,
    cadastraCliente
}