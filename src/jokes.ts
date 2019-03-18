import axios from 'axios';
import { wait } from './wait';

export async function* jokeIterator(): AsyncIterableIterator<string> {
    while (true) {
        yield await axios
            .get('https://icanhazdadjoke.com/', { headers: { Accept: 'text/plain' } })
            .then(response => response.data);
    }
}

export const jokeAsyncIterable = (delay = 1000, howMany?: number) => {
    let iterations = 0;

    return async function*() {
        for await (const value of jokeIterator()) {
            yield value;
            iterations++;
            if (!!howMany && howMany >= iterations) {
                break;
            }
            await wait(delay);
        }
    };
};
