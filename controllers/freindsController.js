const db = require('../models/index')
const freindsDal = require("../dal/dalFreind")

class FreindsController {

    getAllFreinds = (async (req, res) => {
        const freinds = await freindsDal.getAllFreinds()
        if (!freinds?.length) {
            return res.status(400).json({ message: 'No freinds found' })
        }

        res.json(freinds)
    })

    getFreindById = (async (req, res)=>{
        const { freindId } = req.body
        if (!freindId) {
            return res.status(400).json({ message: 'freind ID required' })
        }

        const freind = await freindsDal.getFreindById(freindId);
    })

    getFreindsByUserId = (async (req, res) => {
        const userId = req.params.userId
        const freinds = await freindsDal.getFreindsByUserId(userId)
        res.json(freinds)
    })

    addFreind = async (req, res) => {
        const { freindId, name, userId, picturePath, expireDate } = req.body
        // Confirm data
        if (!freindId || !name || !userId || !picturePath) {
            return res.status(400).json({ message: 'All fields are required' })
        }
        const freind = await freindsDal.addFreind({ freindId, name, userId, picturePath, expireDate })
        if (freind) { // Created
            return res.send(freind)
        }
        else {
            return res.status(400).json({ message: 'Invalid freind data received' })
        }
    }

    
    deleteFreindById = (async (req, res) => {
        const { freindId } = req.body
        if (!freindId) {
            return res.status(400).json({ message: 'freind ID required' })
        }
        await freindsDal.deleteFreindById(freindId);
     
        res.json(`freind with ID ${freindId} deleted`)
    })

    updateFreind = (async (req, res) => {
        const { freindId, name, userId, picturePath, expireDate } = req.body
        // Confirm data
        if (!freindId || !name || !userId || !picturePath) {
            return res.status(400).json({
                message: 'All fields are required'
            })
        }
        const freind = await freindsDal.updateFreind({  freindId, name, userId, picturePath, expireDate },freindId)
        if (!freind) {
            return res.status(400).json({ message: 'freind not found' })
        }
        res.json(freind)
    })

    
}

const freindController = new FreindsController();
module.exports = freindController;