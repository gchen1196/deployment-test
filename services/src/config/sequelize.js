import { Sequelize } from 'sequelize'

const dbConfig = {
  dialect: 'postgres',
  host: process.env.POSTGRES_HOST,
}

const db = new Sequelize(process.env.POSTGRES_SCHEMA, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, dbConfig)

export default db