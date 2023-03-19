const db = require('../models/index')
const User = db.users

class UserDal {

    getAllUsers = async () => {
        const users = await User.findAll({
            attributes: {
                exclude: ['password', 'identity_card', 'handicap_card', 'blind_card'],
                // include:'purchases'
            }
        })
        // console.log(users)
        return users
    }


    addUser = async (newUser) => {
        console.log(newUser)
        const user = await User.create(newUser)
        return user
    }


    deleteUser = async (userId) => {
        await User.destroy({
            where: {
                userId: userId
            }
        });
    }

    updateUser = async (userId, newUser) => {

        const user = await User.update(newUser, { where: { id: userId } })
        return user
    }

    getUserByUserId = async (userId) => {
        const users = await User.findOne({ where: { userId: userId } })
        return users
    }
}

const userDal = new UserDal();
module.exports = userDal;