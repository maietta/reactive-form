import type { PageLoad } from './$types';

export const load: PageLoad = ({ url }: { url: URL }) => {

    const multiplier: any = url.searchParams.get('multiplier');

    const random_number = Math.floor(Math.random() * 100);

    let human_readable = `Your random number is ${random_number}, multiplied by your multiplier of ${multiplier} is ${random_number * multiplier}`;

    if (multiplier) {
        return {
            random_number,
            multiplier,
            human_readable
        };
    }

    return {
        random_number
    };
};