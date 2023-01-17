const actionService = require('../service/actions-service')

class ActionController {
    async getActions(req,res, next){
        try{
            const action = await actionService.getActions();
            return res.json(action)
        }
        catch(e){
            next(e)
        }
    }
}

module.exports = new ActionController();