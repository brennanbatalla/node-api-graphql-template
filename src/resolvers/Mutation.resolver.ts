import User from "../database/model/User.model";
import Pet from "../database/model/Pet.model";

const Mutation = {
    createUser: (parent, args) => {
        let user = {firstName: args.firstName, lastName: args.lastName};
        return User.create(user)
    },
    createPet: (parent, args) => {
        let pet = {name: args.name, ownerId: args.ownerId, type: args.type};
        return Pet.create(pet)
    }
}

export {Mutation as default}
