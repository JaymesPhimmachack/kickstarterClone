import * as express from 'express'
import { PORT } from "./utils/config";
import projectRoutes from './routes/projectRoutes'
import { errorHandler } from "./middleware/errorMiddleware";

const app = express()
app.use(express.json())


app.use('/api/projects', projectRoutes)
app.use(errorHandler)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
