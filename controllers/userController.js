
const UserDal = require('../dal/dalUser')
const { Op } = require('sequelize');

class UserController {

    getAllUsers = async (req, res) => {
        const { userId, firstName, lastName, email } = req.query
        //console.log(cateogry_id, author_id, q)
        let where = {}
        if (userId) where.userId = userId
        if (firstName) where.firstName = firstName
        if (lastName) where.lastName = lastName
        if (email) where.email = email

        const users = await UserDal.getAllUsers({
            attributes: ['userId', 'firstName', 'lastName', 'handicap_precentage', 'points', 'phone', 'email', 'birth_year', 'family_status', 'num_of_children'],
            where: {
                [Op.and]: where
            }
        })

        if (!users?.length) {
            return res.status(400).json({ message: 'No users found' })
        }
        // console.log(users)
        res.json(users)
    }

    deleteUser = async (req, res) => {
        const { userId } = req.body
        if (!userId) {
            return res.status(400).json({ message: 'user ID required' })
        }
        await UserDal.deleteUser(userId);
        res.json(`user with ID ${userId} deleted`)
    }

    updateUser = async (req, res) => {
        const { id } = req.params
        const { userId, firstName, lastName, handicap_precentage, points, phone, password, mail, birth_year, family_status, num_of_children, identity_card, handicap_card, blind_card } = req.body
        // Confirm data
        if (!id || !userId || !firstName || !lastName || !password || !mail || !identity_card || !handicap_card || !blind_card) {
            return res.status(400).json({ message: 'All fields are required' })
        }
        const user = await UserDal.updateUser(id, { firstName, lastName, handicap_precentage, points, phone, password, mail, birth_year, family_status, num_of_children, identity_card, handicap_card, blind_card })
        if (!user) {
            return res.status(400).json({ message: 'user not found' })
        }
        res.json(user)
    }

    getUserByUserId = async (req, res) => {
        const userId = req.params.userId
        const users = await UserDal.getUserByUserId(userId)
        res.json(users)
    }
}

const userController = new UserController();
module.exports = userController;