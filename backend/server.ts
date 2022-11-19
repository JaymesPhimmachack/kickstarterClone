require('express-async-errors')
require('./utils/config')
import express from 'express'
import { PORT } from "./utils/config";
import projectRoutes from './routes/projectRoutes'
import userRoutes from './routes/userRoutes'
import { errorHandler } from "./middleware/errorMiddleware";
import { connectDB } from "./database/db";
import * as Colors from 'colors.ts'
Colors.colors('', '')

connectDB()
const app = express()
app.use(express.json())


app.use('/api/projects', projectRoutes)
app.use('/api/users', userRoutes)

app.use(errorHandler)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
