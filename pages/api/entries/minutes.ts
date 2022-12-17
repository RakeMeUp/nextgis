// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { query } from "../../../server/services/query";
import { connectMongo } from "../../../server/database/connectMongo";
import { getAllMs } from "../../../server/utils/getAllMs";

export default async function minutesHandler(req: NextApiRequest, res: NextApiResponse) {
    await connectMongo();

    const {
        method,
        query: { year, month, day, userId },
    } = req;

    switch (method) {
        case "GET":
            try {
                if (!userId) {
                    res.status(400).send("Missing UserId");
                } else if (!Array.isArray(userId)) {
                    const entries = await query({ year, month, day, userId });
                    const milliseconds = getAllMs(entries);
                    const mins = milliseconds / 60000;
                    res.status(200).json(mins);
                }
            } catch (error) {
                res.status(500).send("Internal Server Error");
            }
            break;
        default:
            res.setHeader("Allow", ["GET"]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
