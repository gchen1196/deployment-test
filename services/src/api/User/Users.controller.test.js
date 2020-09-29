import supertest from 'supertest'
import { app } from '../../server.js'

jest.mock('./Users.service.js', () => ({
  createUser: jest.fn().mockResolvedValue({firstName: 'A'})
}))

test('it should create a User', done => {
  supertest(app)
  .post('/users')
  .send({ firstName: 'A' })
  .end((err, res) => {
    console.log(res.body)
    done()
  })
})