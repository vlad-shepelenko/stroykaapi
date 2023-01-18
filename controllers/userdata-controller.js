const userdataService = require('../service/userdata-service')

class UserdataController{
    async setUserdata(req, res, next){
        try{
            const {id, name, surname, bday, phone, mail, password} = req.body;
            const user = await userdataService.setUserdata(id, name, surname, bday, phone, mail, password)
            return res.json(user)
        }
        catch(e){
            next(e)
        }
    }

    async getUserdataById(req, res, next){
        try{
            const {id} = req.body;
            const user = await userdataService.getUserdataById(id);
            return res.json(user);
        }
        catch(e){
            next(e)
        }
    }
}

module.exports = new UserdataController();