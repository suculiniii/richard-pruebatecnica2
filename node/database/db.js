import { Sequelize } from "sequelize";

const db= new Sequelize('data_app', 'root', '',{
    host:'localhost',
    dialect:'mysql'
})
export default db 