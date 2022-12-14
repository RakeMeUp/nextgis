import createHttpError from "http-errors";
import { Entry } from "../../Interfaces/Entry";
import entryModel from "../models/entryModel";

export async function getDay(year: number, month: number, dayOfMonth: number) {
    try {
        let entries = [] as Entry[];
        if (dayOfMonth == 31) {
            entries = await entryModel.find({
                Start: {
                    $gte: new Date(year, month, dayOfMonth),
                },
            });
        } else {
            entries = await entryModel.find({
                Start: {
                    $gte: new Date(year, month, dayOfMonth),
                    $lt: new Date(year, month, dayOfMonth + 1),
                },
            });
        }
        return entries;
    } catch (error) {
        throw createHttpError(400, { message: error });
    }
}
