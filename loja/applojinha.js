class Produto {
    constructor(marca, grupo, nomeproduto, descricao, valor){
        this.marca=marca 
        this.grupo=grupo 
        this.nomeproduto=nomeproduto 
        this.descricao=descricao 
        this.valor=valor
    }
    validarProduto(){
        for(let i in this) {
            if(this[i] == undefined || this[i] == "" || this[i] == null){
                return false
            } else {
                return true
            }
        }
    }
}

class BD{
    constructor(){
        let id =localStorage.getItem('id')

        if(id === null){
        localStorage.setItem('id', 0)
        }
    }

    getProximoId(){
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
    }

    persistirDados(dados){
        let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(dados))
        localStorage.setItem('id', id)
    }

    recuperarTodosRegistros(){
        let produtos = Array()
        let id = localStorage.getItem('id')

        for(let i = 1; i <= id; i++){
            let produto = JSON.parse(localStorage.getItem(i)) 
            if(produto==null){
                continue
            }
            produto.id = i
            produtos.push(produto)
        }
        return produtos
    }
    pesquisar(produto){
        let produtosFiltradas = Array()
        produtosFiltradas = this.recuperarTodosRegistros()


        if(produto.marca != ''){
            produtosFiltradas = produtosFiltradas.filter(d => d.marca == produto.marca)   
        }
        if(produto.grupo != ''){
            produtosFiltradas = produtosFiltradas.filter(d => d.grupo == produto.grupo)
        }
        if(produto.nomeproduto != ''){
            produtosFiltradas = produtosFiltradas.filter(d => d.nomeproduto == produto.nomeproduto)
        }
        if(produto.descricao != ''){
            produtosFiltradas = produtosFiltradas.filter(d => d.descricao == produto.descricao)
        }
        if(produto.valor != ''){
            produtosFiltradas = produtosFiltradas.filter(d => d.valor == produto.valor)
        }
        
    }

    remover(id){
        localStorage.removeItem(id)
    }
    
}

let bancoDeDados = new BD()

function cadastrarProduto(){
    let marca       = document.getElementById('marca')
    let grupo       = document.getElementById('grupo')
    let nomeproduto = document.getElementById('nomeproduto')
    let descricao   = document.getElementById('descricao')
    let valor       = document.getElementById('valor')

    let produto = new Produto(
        marca.value,
        grupo.value,
        nomeproduto.value,
        descricao.value,
        valor.value,
    )

    if(produto.validarProduto()){
        bancoDeDados.persistirDados(produto)

        
        $('#modalRegistroDespesa').modal('show')
        marca.value = ''
        grupo.value = ''
        nomeproduto.value = ''
        descricao.value = ''
        valor.value = ''
    } else {
        
        $('#modalRegistroDespesa').modal('show')
    }
}

function carregaListaprodutos(produtos = Array()) {
    if(produtos.length==0){
        produtos = bancoDeDados.recuperarTodosRegistros()
    }

    let listaprodutos = document.getElementById('listaprodutos')
    listaprodutos.innerHTML = ''

    produtos.forEach((d) => {
        let linha = listaprodutos.insertRow()
        linha.insertCell(0).innerHTML = `${d.nomeproduto} / ${d.grupo} / ${d.marca}`
        linha.insertCell(1).innerHTML = 
        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = d.valor

        let btn = document.createElement("button")
        btn.className = "btn btn-danger"
        btn.innerHTML = '<i class ="fas fa-times"></i>'
        btn.id = `id_produto_${d.id}`
        btn.onclick = function(){
            let id = this.id.replace('id_produto_','')
            bancoDeDados.remover(id)
            window.location.reload()
        }
        linha.insertCell(4).append(btn)
    })
}

function pesquisaProdutos(){
    let marca       = document.getElementById('marca').value
    let grupo       = document.getElementById('grupo').value
    let nomeproduto       = document.getElementById('nomeproduto').value
    let descricao = document.getElementById('descricao').value
    let valor     = document.getElementById('valor').value

    let produto = new Produto(marca, grupo, nomeproduto, descricao, valor)

    let produtos = bancoDeDados.pesquisar(produto)

    carregaListaprodutos(produtos)
} 




