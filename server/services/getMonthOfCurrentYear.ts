import { getMonth } from "./getMonth";

export async function getMonthOfCurrentYear(month: number) {
    const currDate = new Date();
    return await getMonth(currDate.getFullYear(), month);
}
