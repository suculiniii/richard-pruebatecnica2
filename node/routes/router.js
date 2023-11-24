import express from 'express'
import { createClliente, deleteCliente, getAllClientes, getCliente, updateCliente } from '../controllers/Blogcontroller.js'

const router = express.Router()

router.get('/', getAllClientes)
router.get('/:id', getCliente)
router.post('/', createClliente)
router.put(':id', updateCliente)
router.delete(':id', deleteCliente)

export default router 