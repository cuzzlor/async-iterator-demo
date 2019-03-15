import { fibonacciIterator } from './fibonacciIterator';
import { jokeIterator } from './jokeIterator';
import { pubSub } from './pubsub';

export const resolvers = {
    Mutation: {
        say: (_: any, { something }: { something: string }) => {
            pubSub.publish('said', something);
            return something;
        },
    },

    Subscription: {
        jokes: {
            subscribe: () => jokeIterator(),
            resolve: (joke: string) => joke,
        },
        fibonacci: {
            subscribe: () => fibonacciIterator(),
            resolve: (value: number) => value,
        },
        listen: {
            subscribe: () => pubSub.asyncIterator('said'),
            resolve: (something: string) => something,
        },
    },
};
