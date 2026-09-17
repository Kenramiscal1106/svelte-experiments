import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
        message: "World!!"
    };
}) satisfies PageServerLoad;