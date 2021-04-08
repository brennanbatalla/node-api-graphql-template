import {gql} from "apollo-server";
import {User} from "./User";
import {Pet} from "./Pet.type";


const baseTypeDefs = gql`
    type Query
    type Mutation
`

export default [baseTypeDefs, User, Pet]
