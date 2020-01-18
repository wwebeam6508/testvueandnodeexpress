
'use strict'

require('dotenv').config()

const StudentsModel = require('../model/students')

const ctrl = {}

module.exports = ctrl

ctrl.getAll = async (req, res) => {
  try {
    let rs = await StudentsModel.getAll()
    res.send({ status: true, data: rs })
  } catch (error) {
    res.send({ status: false, error: error.message, code: HttpStatus.INTERNAL_SERVER_ERROR })
  }
}
