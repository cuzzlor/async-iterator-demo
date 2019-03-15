import { jokeIterator } from './jokeIterator';

export const resolvers = {
    Subscription: {
        jokes: {
            subscribe: () => jokeIterator(),
            resolve: (joke: string) => joke,
        },
    },
};
