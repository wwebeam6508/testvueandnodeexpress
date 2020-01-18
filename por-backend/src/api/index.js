const express = require('express')
const router = express.Router()

const Students = require('../controller/students')
router.get('/students', Students.getAll)

router.post('/', (req, res) => {
  res.send({
    status: true,
    page: 'api'
  })
})

module.exports = router