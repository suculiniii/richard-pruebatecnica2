import { json } from "sequelize";
import BlogModel from "../models/Blogmodels.js"; //importamos el modelo

//metodos para el crud 

//mostrar todos
export const getAllClientes= async (req, res) => {
    try {
        const clientes = await BlogModel.findAll()
        res.json(clientes)
    } catch (error) {
        res.json({message: error.message})
    }
}
//mostrar uno solo
export const getCliente= async (req, res) => {
    try {
        const cliente = BlogModel.findAll({
            where:{id:req.params.id}
        })
        res.json(cliente)
    } catch (error) {
        res.json({message: error.message})
    }
}

//crear un registro
export const createClliente= async (req, res) => {
    try {
        await BlogModel.create(req.body)
        res.json({
            "message": "Registro creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//actualizar un registro
export const updateCliente= async (req, res) =>{
    try {
        await BlogModel.update(req.body, {
            where: {id:req.params.id }
        })
        res.json({
            "message": "Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
    
}
//eliminar un registro 
export const deleteCliente= async (req, res) => {
    try {
        await BlogModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message": "Registro elimnado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}