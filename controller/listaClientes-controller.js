import { clienteService } from "../service/cliente-service.js"

const criaNovaLinha = (nome, email, id) => { //cria um template pra gerar visualização dos dados no html
    const linhaNovoCliente = document.createElement('tr')
    const conteudo = `
        <td class="td" data-td>${nome}</td>
            <td>${email}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                </ul>
            </td>`

    linhaNovoCliente.innerHTML = conteudo
    linhaNovoCliente.dataset.id = id
    return linhaNovoCliente
}

const tabela = document.querySelector('[data-tabela]') //percorrendo o DOM para selecionar a tabela

tabela.addEventListener("click", async (evento) => {
    let botaoExcluir = evento.target.className === 'botao-simples botao-simples--excluir'
    if (botaoExcluir) {
        try {
            const linhaCliente = evento.target.closest('[data-id]')
            let id = linhaCliente.dataset.id //recebe o que foi passado como argumento na hora da criação do cliente
            await clienteService.removeCliente(id)
            linhaCliente.remove() //após a remoção do cliente ser concluída(resolução da Promise retornada), a linha do cliente correspondente é removida do DOM, fazendo com que a linha da tabela desapareça da página}
        } catch (erro) {
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }
    }
})

const render = async () => {
    try {
        const listaClientes = await clienteService.listaClientes() //a conexão sendo chamada, devolvendo a resposta e interagindo com a tela
        listaClientes.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id)) //nova linha é adicionada à tabela
        })
    } catch (erro) {
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
}

render()