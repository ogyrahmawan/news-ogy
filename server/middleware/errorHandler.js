module.exports = (err, req, res, next) => {
    if(err.status){
        res.status(err.status).json({
            message: err.message
        })
    } else if (err.name == 'SequelizeUniqueConstraintError') {
        res.status(401).json({message: `email must be unique`})
    } else if(err.name = `SequelizeValidationError`){
        res.status(400).json({
            message: err.errors[0].message
        })
    } 
    else{
        res.status(500).json({
            message: `internal server error`
        })
    }
}