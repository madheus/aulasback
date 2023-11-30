const conection = require('../database/conection')
const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskCrontoller')

router.post('/novaTarefa', TaskController.novaTarefa())

router.post('novaTarefa', TaskController.novaTarefa())
router.get('listarTarefas', TaskController.listarTarefas())
router.put('/atualizarTarefa/tarefa/ :id', TaskController.atualizarTarefa())
router.delete('/atualizarTarefa/tarefa/ :id', TaskController.removerTarefa())

module.exports = router