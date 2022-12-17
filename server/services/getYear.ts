import createHttpError from "http-errors";
import { Entry } from "../../Interfaces/Entry";
import entryModel from "../models/entryModel";

export async function getYear(year: number, userId: string) {
    try {
        let entries = [] as Entry[];
        entries = await entryModel.find({
            userId: userId,

            "data.Start": {
                $gte: new Date(year, 1, 1),
                $lt: new Date(year + 1, 1, 1),
            },
        });
        if (entries.length == 0) throw new Error("No Entries like that");

        return entries;
    } catch (error) {
        throw createHttpError(400, { message: error });
    }
}
