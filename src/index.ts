import express, { Express } from 'express'
import morgan from 'morgan'
import path from 'path'

// Initializations
const app: Express = express()

// Settings
app.set('port', process.env.PORT || 3200)

// Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes

//  Static files
app.use(express.static(path.join(__dirname, 'public')))

// Starting server
app.listen(app.get('port'), () => {
  console.log('Mangar-Sword | [+] listen on port:', app.get('port'))
})
