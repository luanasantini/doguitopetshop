import {clienteService} from "../service/cliente-service.js"

const criaNovaLinha = (nome, email) => { //cria um template pra gerar visualização dos dados no html
    const linhaNovoCliente = document.createElement('tr')
    const conteudo = `
        <td class="td" data-td>${nome}</td>
            <td>${email}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                </ul>
            </td>`

    linhaNovoCliente.innerHTML = conteudo
    return linhaNovoCliente
}

const tabela = document.querySelector('[data-tabela]') //percorrendo o DOM para selecionar a tabela

clienteService.listaClientes() //a conexão sendo chamada, devolvendo a resposta e interagindo com a tela
    .then(data => {
        data.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email)) //nova linha é adicionada à tabela


        })
    })