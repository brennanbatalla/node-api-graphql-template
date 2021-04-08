import {gql} from 'apollo-server';

export const User = gql`
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        pets: [Pet!]!
    }

    extend type Query {
        users: [User!]!
        user(id: ID!): User!
    }

    extend type Mutation {
        user(firstName: String!, lastName: String!): User!
    }
`;
