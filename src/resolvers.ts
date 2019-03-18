import { fibonacciAsyncIterable } from './fibonacci';
import { jokeAsyncIterable } from './jokes';
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
            subscribe: () => jokeAsyncIterable()(),
            resolve: (joke: string) => joke,
        },
        fibonacci: {
            subscribe: () => fibonacciAsyncIterable()(),
            resolve: (value: number) => value,
        },
        listen: {
            subscribe: () => pubSub.asyncIterator('said'),
            resolve: (something: string) => something,
        },
    },
};
