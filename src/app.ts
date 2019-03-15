// tslint:disable:no-console

import { ApolloServer } from 'apollo-server';
import { resolvers } from './resolvers';
import { typeDefs } from './schema';

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
});

apolloServer.listen().then(({ url }) => console.log(`🚀 Server ready at ${url}`));
