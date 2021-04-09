import Pet from "../database/model/Pet.model";

const User = {
    pets: (parent, args, context) => {
        console.log("QUERY PETS");
        return Pet.findAll({where: {ownerId: parent.id}})
    },
}

export {User as default};
