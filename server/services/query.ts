import { Entry } from "../../Interfaces/Entry";
import entryModel from "../models/entryModel";
import { getDay } from "./getDay";
import { getMonth } from "./getMonth";
import { getYear } from "./getYear";

type Props = {
    year: string | string[] | undefined;
    month: string | string[] | undefined;
    day: string | string[] | undefined;
    userId: string;
};

export async function query({ year, month, day, userId }: Props): Promise<Entry[]> {
    let entries = [] as Entry[];
    if (!userId) return entries;

    if (year) {
        if (month) {
            if (day) {
                entries = await getDay(+year, +month, +day, userId);
            } else {
                entries = await getMonth(+year, +month - 1, userId);
            }
        } else {
            entries = await getYear(+year, userId);
        }
    } else {
        entries = await entryModel.find({ userId: userId });
    }

    return entries;
}
