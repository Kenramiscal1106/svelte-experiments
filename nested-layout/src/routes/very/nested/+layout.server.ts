import type { LayoutServerLoad } from './$types';

export const load = (async () => {
    return {layoutMessage: "World!!!"};
}) satisfies LayoutServerLoad;