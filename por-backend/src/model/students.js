const faker = require('faker')

const model = {}

module.exports = model

model.getAll = async () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    data.push({
      id:i,
      student_code:"5"+faker.random.number({min:1,max:9})+""+faker.random.number({min:10000,max:99999}),
      first_name:faker.name.firstName(),
      last_name:faker.name.lastName()
    })
  }
  return await data
}