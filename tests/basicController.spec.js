const baseController = require('../controllers/baseController');

const mockRequest = (body = {}, params = {}, query = {}) => {
    return {
        body: body,
        params: params,
        query: query
    }
}

const mockResponse = () => {
    const res = {}
    res.json = jest.fn().mockReturnValue(res)
    res.status = jest.fn().mockReturnValue(res)

    return res
}

// this one to test hello function from baseController hello
describe('Base Controller Hello Function', () => {
    test('res.json called with {status: true, message:"hello world"}', (done) => {
        const req = mockRequest()
        const res = mockResponse()

        baseController.hello(req, res)
        expect(res.status).toBeCalledWith(200)
        expect(res.json).toBeCalledWith({
            status: true,
            message: 'hello world'
        })
        done()
    })
})

// this one to test sum function from baseController sum
describe('Base Controller Sum Function', () => {
    test('res.json called with { status: true, message: "Parameter Summarized", data:{x:x, y:y, result:x+y } }', (done) => {
        const req = mockRequest({ x: 5, y: 10 })
        const res = mockResponse()

        baseController.sum(req, res)
        expect(res.status).toBeCalledWith(200)
        expect(res.json).toBeCalledWith({
            status: true,
            message: 'Parameter Summarized',
            data: {
                x: req.body.x,
                y: req.body.y,
                result: req.body.x + req.body.y
            }
        })
        done()
    })
})