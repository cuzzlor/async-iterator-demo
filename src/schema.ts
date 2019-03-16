import { gql } from 'apollo-server';

export const typeDefs = gql`
    type Query {
        subscribers: [String!]
    }

    type Mutation {
        say(something: String!): String!
    }

    type Subscription {
        jokes: String!
        fibonacci: Float!
        listen: String!
    }
`;
