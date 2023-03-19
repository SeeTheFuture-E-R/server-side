const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserDal = require('../dal/dalUser')
const db = require('../models/index')
const User = db.users

const Mail = require('../utils/email')
const Calc = require('../utils/calc')
const Validator = require('validator')


const login = async (req, res) => {
    console.log(req.body.userId)
    console.log(req.body.password)
   console.log("👌") 
   debugger;
  
    const {  userId ,password} = req.body;
    debugger;
    if (!userId || !password) return res.status(400).json({ message: 'All fields are required' })

    const foundUser = await User.findOne({ where: { userId: userId } })
    console.log(foundUser)
    if (!foundUser)
        return res.status(401).json({ message: 'Unauthorized' })

    const match = await bcrypt.compare(password, foundUser.password)
    if (!match)
        return res.status(401).json({ message: 'Unauthorized' })
    const userInfo = {
        userId: foundUser.userId, firstName: foundUser.firstName,
        lastName: foundUser.lastName, email: foundUser.email
    }
    //Create the token
    const accessToken = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET)
    res.setHeader('Authorization', `Bearer ${accessToken}`)
    console.log(accessToken)
    res.json({ accessToken: accessToken })
}


const register = async (req, res) => {

    const { userId, firstName, lastName, handicap_precentage, phone, email, password, birth_year, family_status, num_of_children, identity_card, handicap_card, blind_card } = req.body
    console.log(userId, firstName, lastName, email, password)
    //   const{  identity_card, handicap_card, blind_card}=req.body ***Require all  fields???**
    if (!userId || !firstName || !lastName || !email || !password) {// ditto???

        return res.status(400).json({ message: 'All fields are required' })
    }
    const duplicate = await User.findOne({ where: { userId: userId } })
    if (duplicate) {
        return res.status(409).json({ message: "Duplicate userId" })
    }

    if (!Validator.isEmail(email))
        return res.status(400).json({ message: 'The email is invalid' })

    if (!Validator.isIdentityCard(userId, 'he-IL'))
        return res.status(400).json({ message: 'The UserId is invalid' })

    if (phone && !Validator.isMobilePhone(phone,  'he-IL'))
        return res.status(400).json({ message: 'The phone is invalid' })

    const hashedPwd = await bcrypt.hash(password, 10);

    const points = Calc.calcPoints({ handicap_precentage, birth_year, family_status, num_of_children })

    const code = 00000

    await Mail.sendMail(email, 'email from node js', `wow!!! you successed  💯😂🤣😍😋💯
    num of points ${points} your code is ${code}`)

    const userObject = { userId, firstName, lastName, handicap_precentage, points, phone, password: hashedPwd, email, birth_year, family_status, num_of_children, identity_card, handicap_card, blind_card }
    const user = await UserDal.addUser(userObject)
    if (user) { // Created
        return res.status(201).json({
            message: `New user ${user.firstName} ${user.lastName} created`
        })
    }
    else {
        return res.status(400).json({ message: 'Invalid user data received' })
    }

}

module.exports = { login, register }