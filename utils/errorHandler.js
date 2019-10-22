module.exports = (res, error) => {
    res.status(500).json({
        success: false,
        msg: error.msg ? error.msg : error
    })
}