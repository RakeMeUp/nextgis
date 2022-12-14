// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import EntryModel from "../../../server/models/entryModel";
import { connectMongo } from "../../../server/utils/connectMongo";

export default async function entriesHandler(req: NextApiRequest, res: NextApiResponse) {
    await connectMongo();

    switch (req.method) {
        case "POST":
            try {
                if (typeof req.body.End === "number" || typeof req.body.Start === "number")
                    throw Error("bad Dates");
                const entries = await EntryModel.create(req.body);
                res.status(200).json(entries);
            } catch (error) {
                console.log(error);
                res.status(500).send("Internal Server Error");
            }
            break;
        case "GET":
            try {
                const entries = await EntryModel.find();
                res.status(200).json(entries);
            } catch (error) {
                res.status(500).send("Internal Server Error");
            }
            break;
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
