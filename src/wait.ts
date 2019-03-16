export const wait = async (howLong: number) =>
    new Promise(resolve => {
        setTimeout(() => resolve(), howLong);
    });
