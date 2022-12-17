import createHttpError from "http-errors";
import { Entry } from "../../Interfaces/Entry";
import entryModel from "../models/entryModel";

export async function getMonth(year: number, monthIndex: number, userId: string) {
    try {
        let entries = [] as Entry[];
        if (monthIndex == 12) {
            entries = await entryModel.find({
                userId: userId,

                "data.Start": {
                    $gte: new Date(year, monthIndex, 1),
                },
            });
        } else {
            entries = await entryModel.find({
                userId: userId,

                "data.Start": {
                    $gte: new Date(year, monthIndex, 1),
                    $lt: new Date(year, monthIndex + 1, 1),
                },
            });
        }
        if (entries.length == 0) throw new Error("No Entries like that");
        return entries;
    } catch (error) {
        throw createHttpError(400, { message: error });
    }
}
