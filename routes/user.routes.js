const express = require('express')
const router = express.Router()
const user = require('../models/user.model')
const middlewares =  require('../helpers/middlewares')
let users = require('../data/users.json')

router.get('/', async (req, res) => {
    let page = parseInt(req.query.page)
    let pageLimit = parseInt(req.query.limit)
    let start = page - 1
    let end = pageLimit

    if(!isNaN(page) || !isNaN(pageLimit)){
        if(page <= 0 || !page || pageLimit <=0 || !pageLimit){
            res.status(400).json({ message: 'invalid parameter'})
        }else{
            if(page != 1){
                start = page * pageLimit - pageLimit
                end = start + pageLimit
            }
            res.json({
                'page' : page,
                'limit' : pageLimit,
                'total' : users.length,
                'users' : users.slice(start, end)
            })
        }
    }else if(typeof req.query.search_key != 'undefined' && typeof req.query.search_value != 'undefined'){
        let results = middlewares.searchData(req.query.search_key, req.query.search_value)
        res.json(results)
    }else{
        await user.getUsers()
        .then(users => res.json(users))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            } else {
                res.status(500).json({ message: err.message })
            }
        })
    }
})

router.get('/:id', middlewares.mustBeInteger, async (req, res) => {
    const id = req.params.id

    await user.getUser(id)
    .then(user => res.json(user))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

router.post('/', middlewares.checkFieldsUser, async (req, res) => {
    await user.insertUser(req.body)
    .then(user => res.status(201).json({
        message: `The user #${user.id} has been created`,
        content: user
    }))
    .catch(err => res.status(500).json({ message: err.message }))
})

router.put('/:id', middlewares.mustBeInteger, middlewares.checkFieldsUser, async (req, res) => {
    const id = req.params.id

    await user.updateUser(id, req.body)
    .then(user => res.json({
        message: `The user #${id} has been updated`,
        content: user
    }))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        }

        res.status(500).json({ message: err.message })
    })
})

router.delete('/:id', middlewares.mustBeInteger, async (req, res) => {
    const id = req.params.id

    await user.deleteUser(id)
    .then(user => res.json({
        message: `The user #${id} has been deleted`
    }))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        }
        res.status(500).json({ message: err.message })
    })
})

module.exports = router