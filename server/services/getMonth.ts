import createHttpError from "http-errors";
import { Entry } from "../../Interfaces/Entry";
import entryModel from "../models/entryModel";

export async function getMonth(year: number, monthIndex: number) {
    try {
        let entries = [] as Entry[];
        if (monthIndex == 12) {
            entries = await entryModel.find({
                Start: {
                    $gte: new Date(year, monthIndex, 1),
                },
            });
        } else {
            entries = await entryModel.find({
                Start: {
                    $gte: new Date(year, monthIndex, 1),
                    $lt: new Date(year, monthIndex + 1, 1),
                },
            });
        }
        return entries;
    } catch (error) {
        throw createHttpError(400, { message: error });
    }
}
