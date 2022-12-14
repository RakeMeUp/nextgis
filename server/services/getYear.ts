import createHttpError from "http-errors";
import { Entry } from "../../Interfaces/Entry";
import entryModel from "../models/entryModel";

export async function getYear(year: number) {
    try {
        let entries = [] as Entry[];
        entries = await entryModel.find({
            Start: {
                $gte: new Date(year, 1, 1),
                $lt: new Date(year + 1, 1, 1),
            },
        });
        return entries;
    } catch (error) {
        throw createHttpError(400, { message: error });
    }
}
