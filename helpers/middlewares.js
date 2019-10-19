let users = require('../data/users.json')

function mustBeInteger(req, res, next) {
    const id = req.params.id

    if(!Number.isInteger(parseInt(id))){
        res.status(400).json({
            message: 'ID must be an integer'
        })
    }else{
        next()
    }
}

function checkFieldsUser(req, res, next){
    const { first_name, last_name, email, gender} = req.body

    if(first_name && last_name && email, gender) {
        next()
    }else{
        res.status(400).json({
            message: 'all field must be fill'
        })
    }
}

function checkFieldsUser(req, res, next){
    const { first_name, last_name, email, gender} = req.body
    var existEmail = users.find(r => r.email == email)

    if(/(.+)@(.+){2,}\.(.+){2,}/.test(email)){
        if(first_name && last_name && email && gender && !existEmail) {
            next()
        }else if(first_name && last_name && email && gender && existEmail){
            res.status(400).json({
                message: 'email must be unique and email already exist'
            })
        }else{
            res.status(400).json({
                message: 'all field must be fill'
            })
        }
    }else{
        res.status(400).json({
            message: 'email not valid'
        })
    }
}

module.exports = {
    mustBeInteger,
    checkFieldsUser
}