import {gql} from 'apollo-server';

export const Pet = gql`
    type Pet {
        id: ID!
        name: String!
        ownerId: String!
        owner: User
    }

    extend type Query {
        pets: [Pet!]!
        pet: Pet!
    }

    extend type Mutation {
        pet(name: String!, type: String, ownerId: String!): Pet!
    }
`;
