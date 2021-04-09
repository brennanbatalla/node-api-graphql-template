import Pet from "../database/model/Pet.model";
import User from "../database/model/User.model";

const Query = {
    getUsers: () => {
        console.log("QUERY USERS");
        return User.findAll()
    },
    getUser: (parent, args, context, info) => {
        return User.findOne({where: {id: args.id}})
    },
    getPets: (parent, args) => {
        return Pet.findAll({where: {ownerId: args.ownerId}})
    },
    getPet: (parent, args, context, info) => {
        return Pet.findOne({where: {ownerId: args.ownerId}})
    }
}

export {Query as default}
