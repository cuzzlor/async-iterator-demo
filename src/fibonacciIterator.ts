export function* fibonacciIterator() {
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
