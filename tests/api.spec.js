const request = require('supertest')
const app = require('../app')

describe('GET /', () => {
    test('Return status 200 and a hello world message', (done) => {
        request(app).get('/').then((res) => {
            expect(res.statusCode).toBe(200)
            expect(res.body).toHaveProperty('status')
            expect(res.body).toHaveProperty('message')
            expect(res.body.status).toBe(true)
            expect(res.body.message).toEqual('hello world')
            done()
        })
    })
})