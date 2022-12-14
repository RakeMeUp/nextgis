import { getYear } from "./getYear";

export async function getCurrentYear() {
    const currDate = new Date();
    return await getYear(currDate.getFullYear());
}
