const database = require("../database/conection")

class TaskController {

    novaTarefa(request, response) {
        const { tarefa, descricao, responsavel } = request.bady

        console.log(tarefa, descricao, responsavel)

        database.insert({ tarefa, descricao, responsavel }).table("task").then(data => {
            console.log(data)
            response.json({ message: "tarefa criada com sucesso" })
        }).catch(error => {
            console.log(error)
        })
    }

    listarTarefas(request, response) {
        database.select("*").tasks('tasks').then(tarefas => {
            console.log(tarefas)
            response.json(tarefas)

        }).catch(error => {
            console.log(error)
        })
    }

    atualizarTarefa(request, response) {
        const id = request.params
        const { descricao } = request.body

        database.where({ id: id }).update({ descricao }).table("tasks").then(data => {

        }).catch(error => {
            response.json(error)
        })
    }

    removerTarefa(request, response) {
        const id = request.params
        database.where({ id: id }).del().table("tasks").then(data => {
            response.json({ message: "tarefa removida com sucesso" })
        }).catch(error => {
            response.json(error)
        })
    }
}

module.exports = new TaskController()