// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import EntryModel from "../../../server/models/entryModel";
import { query } from "../../../server/services/query";
import { connectMongo } from "../../../server/utils/connectMongo";

export default async function entriesHandler(req: NextApiRequest, res: NextApiResponse) {
    await connectMongo();
    const {
        method,
        query: { year, month, day },
        body,
    } = req;
    switch (method) {
        case "POST":
            try {
                if (typeof body.End === "number" || typeof body.Start === "number")
                    throw Error("bad Dates");
                const entries = await EntryModel.create(body);
                res.status(200).json(entries);
            } catch (error) {
                console.log(error);
                res.status(500).send("Internal Server Error");
            }
            break;
        case "GET":
            try {
                const entries = await query({ year, month, day });
                res.status(200).json(entries);
            } catch (error) {
                res.status(500).send("Internal Server Error");
            }
            break;
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
