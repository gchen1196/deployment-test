import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import db from './config/sequelize.js'
import { users } from './api'

export const app = express()
const port = process.env.PORT

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/users', users)

app.listen(port, async () => {
  await db.sync({ force: true })
  console.log(`App listening on ${port}`)
})
