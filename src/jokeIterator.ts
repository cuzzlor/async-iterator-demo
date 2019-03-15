import axios from 'axios';

export async function* jokeIterator() {
    while (true) {
        yield await axios
            .get('https://icanhazdadjoke.com/', { headers: { Accept: 'text/plain' } })
            .then(response => response.data);
    }
}
