const hello = (req, res) => {
    res.status(200).json({
        status: true,
        message: 'hello world'
    })
}

const sum = (req, res) => {

    const resp = req.body.x + req.body.y
    res.status(200).json({
        status: true,
        message: 'Parameter Summarized',
        data: {
            x: req.body.x,
            y: req.body.y,
            result: resp
        }
    })
}


module.exports = {
    hello, sum
}