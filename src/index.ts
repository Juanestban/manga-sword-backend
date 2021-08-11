import express, { Express } from 'express'
import morgan from 'morgan'
import path from 'path'
import cors from 'cors'
import dotenv from 'dotenv'
import { router } from './routes/index.routes'

// Initializations
const app: Express = express()
dotenv.config()
import './mongo'

// Settings
app.set('port', process.env.PORT || 3200)

// Middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api', router)

//  Static files
app.use(express.static(path.join(__dirname, 'public')))

// Starting server
app.listen(app.get('port'), () => {
  console.log('Mangar-Sword | [+] listen on port:', app.get('port'))
})
