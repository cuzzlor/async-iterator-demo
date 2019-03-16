import { wait } from './wait';

export function* fibonacciIterator(): IterableIterator<number> {
    yield 0;
    yield 1;

    let previous = 0;
    let current = 1;

    while (true) {
        const next = previous + current;
        previous = current;
        current = next;
        yield next;
    }
}

export const fibonacciAsyncIterable = (delay = 1000, howMany?: number) => {
    let iterations = 0;

    return async function*() {
        for (const value of fibonacciIterator()) {
            yield value;
            iterations++;
            if (value === Infinity || (!!howMany && howMany >= iterations)) {
                break;
            }
            await wait(delay);
        }
    };
};
