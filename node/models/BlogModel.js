import db from "../database/db"; //importamos la base de datos
import { DataTypes } from "sequelize"; //importamos sequelize

const BlogModel= db.define('clientes', {
    nombre:  { type:DataTypes.STRING},
    email: { type:DataTypes.STRING},
    sexo: { type:DataTypes.NUMBER},
    area: { type:DataTypes.STRING},
})

export default BlogModel