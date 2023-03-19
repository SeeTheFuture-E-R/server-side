const db = require('../models/index')
const Freinds = db.freinds
class FreindsDal{
    getAllFreinds = (async () => {

        const freinds = await Freinds.findAll({})
        return freinds;
    })


    addFreinds = async ( userId, product, expireDate ) => {

        const freind = await Freinds.create({ userId, product, expireDate })
       return freind;
    }


    deleteFreind = (async (freindId) => {
       
        await Freinds.destroy({
            where: {
                freindId: freindId,
            }
        });
        return true;
    })

    updateFreind = (async ( userId, productId, expireDate ) => {
        
        const freind = await Freinds.update({ userId, productId, expireDate });
        return(freind);
      
    })

    getFreindsByUserId = (async (userId) => {
       
        const Freinds = await Freinds.findAll({ where: { userId: userId } })
        return Freinds;
    })

}
const freindsDal = new FreindsDal();
module.exports = freindsDal;