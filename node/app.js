import express from "express";
import cors from 'cors'
import db from './database/db.js' //importamos la base de datos
import clientesRoutes from './routes/routes.js'; //importamos las rutas 

const app= express()

app.use( cors() )
app.use(express.json())
app.use('/clientes', clientesRoutes)

try {
  await db.authenticate()
  console.log('Conexion exitosa')
} catch (error) {
  console.log(`El error de la conexion es: ${error}`)
}
 app.get('/', (req, res)=>{
  res.send('hola careverga')
})

app.listen(8000, ()=>{ //que este en el puerto 8000
  console.log(corriendo)
}) 