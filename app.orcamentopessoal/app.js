class Despesa {
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano=ano 
        this.mes=mes 
        this.dia=dia 
        this.tipo=tipo 
        this.descricao=descricao 
        this.valor=valor
    }
    validarDados(){
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
        let despesas = Array()
        let id = localStorage.getItem('id')

        for(let i = 1; i <= id; i++){
            let despesa = JSON.parse(localStorage.getItem(i)) 
            if(despesa==null){
                continue
            }
            despesa.id = i
            despesas.push(despesa)
        }
        return despesas
    }
    pesquisar(despesa){
        let despesasFiltradas = Array()
        despesasFiltradas = this.recuperarTodosRegistros()


        if(despesa.ano != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesa.ano)   
        }
        if(despesa.mes != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.mes == despesa.mes)
        }
        if(despesa.dia != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.dia == despesa.dia)
        }
        if(despesa.tipo != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.tipo == despesa.tipo)
        }
        if(despesa.descricao != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.descricao == despesa.descricao)
        }
        if(despesa.valor != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.valor == despesa.valor)
        }
        
    }

    remover(id){
        localStorage.removeItem(id)
    }
    
}

let bancoDeDados = new BD()

function cadastrarDespesa(){
    let ano       = document.getElementById('ano')
    let mes       = document.getElementById('mes')
    let dia       = document.getElementById('dia')
    let tipo      = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor     = document.getElementById('valor')

    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value,
    )

    if(despesa.validarDados()){
        bancoDeDados.persistirDados(despesa)
    }
}

function carregaListaDespesas(despesas = Array()) {
    if(despesas.length==0){
        despesas = bancoDeDados.recuperarTodosRegistros()
    }

    let listaDespesas = document.getElementById('listaDespesas')
    listaDespesas.innerHTML = ''

    despesas.forEach((d) => {
        let linha = listaDespesas.insertRow()
        linha.insertCell(0).innerHTML = `${d.dia} / ${d.mes} / ${d.ano}`

        switch(d.tipo){
            case `1`:
                d.tipo = 'alimentação'
                break
            case `2`:
                d.tipo = 'jogos'
                break 
            case `3`:
                d.tipo = 'saude'
                break
            case `4`:
                d.tipo = "transporte"
                break
            case `5`:
                d.tipo = "entreterimento"
                break
        }
        linha.insertCell(1).innerHTML = d.tipo
        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = d.valor

        let btn = document.createElement("button")
        btn.className = "btn btn-danger"
        btn.innerHTML = '<i class ="fas fa-times"></i>'
        btn.id = `id_despesa_${d.id}`
        btn.onclick = function(){
            let id = this.id.replace('id_despesa_','')
            bancoDeDados.remover(id)
            window.location.reload()
        }
        linha.insertCell(4).append(btn)
    })
}

function pesquisarDespesa(){
    let ano       = document.getElementById('ano').value
    let mes       = document.getElementById('mes').value
    let dia       = document.getElementById('dia').value
    let tipo      = document.getElementById('tipo').value
    let descricao = document.getElementById('descricao').value
    let valor     = document.getElementById('valor').value

    let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)

    let despesas = bancoDeDados.pesquisar(despesa)

    carregaListaDespesas(despesas)
} 


