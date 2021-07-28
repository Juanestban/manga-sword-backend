import express, { Express } from 'express'
import morgan from 'morgan'
import path from 'path'
import { router } from './routes/index.routes'

// Initializations
const app: Express = express()
import './database'

// Settings
app.set('port', process.env.PORT || 3200)

// Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use(router)

//  Static files
app.use(express.static(path.join(__dirname, 'public')))

// Starting server
app.listen(app.get('port'), () => {
  console.log('Mangar-Sword | [+] listen on port:', app.get('port'))
})
