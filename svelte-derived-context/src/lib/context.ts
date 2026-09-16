import { createContext } from "svelte";

export const [getNum, setNum] = createContext<() => {number: number, text: string}>();
