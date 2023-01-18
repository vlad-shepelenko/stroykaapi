const UserdatasModel = require('../models/userdatas-model');
const UserModel = require('../models/user-model');

class UserdataService{
    async setUserdata(id, name, surname, bday, phone, mail, pass){
        const user = await UserdatasModel.find({user:  {$eq: id}});
        let bdayArray = bday.split('-').reverse().join('.')
        if(user.length === 0){
            UserdatasModel.create({
                name: name, 
                surname: surname,
                bday: bdayArray,
                phone: phone, 
                user: id
            })
        }
        else{
            const update = await UserdatasModel.findOneAndUpdate({user: id}, {name: name, surname: surname, bday: bdayArray, phone: phone})
        }
    }

    async getUserdataById(id){
        const user = await UserdatasModel.find({ user: {$eq: id} })
        const mail = await UserModel.find({_id: {$eq: user[0].user}})
        user[0]['mail'] = mail[0].email
        let userData = [
            {
                _id: user[0]._id,
                name: user[0].name,
                surname: user[0].surname,
                bday: user[0].bday,
                phone: user[0].phone,
                mail: mail[0].email
            }
        ]
        return userData;
    }
}

module.exports = new UserdataService();