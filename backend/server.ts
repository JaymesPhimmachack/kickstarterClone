import * as express from 'express'
import { PORT } from "./utils/config";
import projectRoutes from './routes/projectRoutes'

const app = express()
app.use(express.json())


app.use('/api/projects', projectRoutes)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
