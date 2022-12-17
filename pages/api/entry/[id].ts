// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import EntryModel from "../../../server/models/entryModel";
import { connectMongo } from "../../../server/database/connectMongo";

export default async function entryIdHandler(req: NextApiRequest, res: NextApiResponse) {
    await connectMongo();

    const {
        query: { id },
        method,
        body,
    } = req;
    switch (method) {
        case "GET":
            try {
                const entries = await EntryModel.findOne({ _id: id });
                res.status(200).json(entries);
            } catch (error) {
                res.status(500).send("Internal Server Error");
            }
            break;
        case "PUT":
            try {
                const entries = await EntryModel.updateOne({ _id: id }, body);
                res.status(200).json(entries);
            } catch (error) {
                res.status(500).send("Internal Server Error");
            }
            break;
        default:
            res.setHeader("Allow", ["GET, PUT"]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
