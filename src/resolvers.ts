import { jokeIterator } from './jokeIterator';
import { fibonacciIterator } from './fibonacciIterator';

export const resolvers = {
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
            subscribe: () => fibonacciIterator(),
            resolve: (said: string) => said,
        }
    },
};
