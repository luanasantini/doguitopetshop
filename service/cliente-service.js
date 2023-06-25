const listaClientes = () => { //conexão com a API
    return fetch(`http://localhost:3000/profile`)
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json()
            } else {
                throw new Error('Não foi possível listar os clientes')
            }
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
            if (resposta.ok) {
                return resposta.body
            } else {
                throw new Error('Não foi possível cadastrar o cliente')
            }
        })
}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE',
    })
        .then(resposta => {
            if (!resposta.ok) {
                throw new Error('Não foi possível remover o cliente')
            }
        })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json()
            } else {
                throw new Error('Não foi possível detalhar o cliente')
            }
        })
}

const atualizaCliente = (id, nome, email) => { //usa como parametro os dados que queremos atualizar
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT', //metodo PUT pois enviaremos dados
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
        })
    })
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json()
            } else {
                throw new Error('Não foi possível atualizar o cliente')
            }
        })
}

export const clienteService = {
    listaClientes,
    cadastraCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}