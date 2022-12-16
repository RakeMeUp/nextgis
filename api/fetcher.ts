import { Entry } from "../Interfaces/Entry";
export const fetcher = async (route: string): Promise<Entry[] | undefined> => {
    const res = await fetch(route);
    const d = await res.json();
    return d;
};
