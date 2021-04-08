import Pet from "../database/model/Pet.model";


export default {
    User: {
        pets: (parent, args) => {
            console.log("QUERY PETS");
            return Pet.findAll({where: {ownerId: parent.id}})
        },
    },
    Query: {
        pets: (parent, args) => {
            console.log("QUERY PETS");
            return Pet.findAll({where: {ownerId: args.ownerId}})
        },
        pet: (parent, args, context, info) => {
            console.log("QUERY PET");
            return Pet.findOne({where: {ownerId: args.ownerId}})
        }
    },
    Mutation: {
        pet: (parent, args) => {
            let pet = {name: args.name, ownerId: args.ownerId, type: args.type};
            return Pet.create(pet)
        }
    }
}
