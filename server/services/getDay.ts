import createHttpError from "http-errors";
import { Entry } from "../../Interfaces/Entry";
import entryModel from "../models/entryModel";

export async function getDay(year: number, month: number, dayOfMonth: number, userId: string) {
    try {
        let entries = [] as Entry[];
        if (dayOfMonth == 31) {
            entries = await entryModel.find({
                userId: userId,
                "data.Start": {
                    $gte: new Date(year, month, dayOfMonth),
                },
            });
        } else {
            entries = await entryModel.find({
                userId: userId,
                "data.Start": {
                    $gte: new Date(year, month, dayOfMonth),
                    $lt: new Date(year, month, dayOfMonth + 1),
                },
            });
        }
        if (entries.length == 0) throw new Error("No Entries like that");

        return entries;
    } catch (error) {
        throw createHttpError(400, { message: error });
    }
}
