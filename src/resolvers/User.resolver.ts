import User from "../database/model/User.model";


export default {
    Query: {
        users: () => {
            console.log("QUERY USERS");
            return User.findAll()
        },
        user: (parent, args, context, info) => {
            console.log("QUERY USER");
            return User.findOne({where: {id: args.id}})
        }
    },
    Mutation: {
        user: (parent, args) => {
            let user = {firstName: args.firstName, lastName: args.lastName};
            return User.create(user)
        }
    }
}
