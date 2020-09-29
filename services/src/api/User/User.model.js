import { DataTypes } from 'sequelize'

import db from '../../config/sequelize.js'

export const User = db.define('User', {
  firstName: {
    type: DataTypes.STRING
  }
})

