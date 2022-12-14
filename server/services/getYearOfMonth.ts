import { getMonth } from "./getMonth";

export async function getYearOfMonth(year: number, month: number) {
    return await getMonth(year, month);
}
