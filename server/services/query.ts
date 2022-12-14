import { Entry } from "../../Interfaces/Entry";
import entryModel from "../models/entryModel";
import { getDay } from "./getDay";
import { getMonth } from "./getMonth";
import { getYear } from "./getYear";

type Props = {
    year: string | string[] | undefined;
    month: string | string[] | undefined;
    day: string | string[] | undefined;
};

export async function query({ year, month, day }: Props) {
    let entries = [] as Entry[];

    if (year) {
        if (month) {
            if (day) {
                entries = await getDay(+year, +month, +day);
            } else {
                entries = await getMonth(+year, +month - 1);
            }
        } else {
            entries = await getYear(+year);
        }
    } else {
        entries = await entryModel.find();
    }

    return entries;
}
