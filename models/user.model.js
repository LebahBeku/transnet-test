let users = require('../data/users.json')
const filename = './data/users.json'
const helper = require('../helpers/helper')

function getUsers() {
    return new Promise((resolve, reject) => {
        if(users.length === 0){
            reject({
                message: 'no users',
                status: 202
            })
        }

        resolve(users)
    })
}

function getUser(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(users, id)
        .then(user => resolve(user))
        .catch(err => reject(err))
    })
}

function insertUser(newUser) {
    return new Promise((resolve, reject) => {
        const id = { id: helper.getNewId(users) }
        newUser = { ...id, ...newUser}
        users.push(newUser)
        helper.writeJSONFile(filename, users)
        resolve(newUser)
    })
}

function updateUser(id, newUser) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(users, id)
        .then(user => {
            const index = users.findIndex(u => u.id == user.id)
            id = { id: user.id }

            users[index] = { ...id, ...newUser}
            helper.writeJSONFile(filename, users)
            resolve(users[index])
        })
        .catch(err => reject(err))
    })
}

function deleteUser(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(users, id)
        .then(() => {
            users = users.filter(u => u.id != id)
            helper.writeJSONFile(filename, users)
            resolve()
        })
        .catch(err => reject(err))
    })
}

module.exports = {
    insertUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser
}