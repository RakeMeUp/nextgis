import { getMonth } from "./getMonth";

export async function getCurrentMonth() {
    const currDate = new Date();
    return await getMonth(currDate.getFullYear(), currDate.getMonth());
}
