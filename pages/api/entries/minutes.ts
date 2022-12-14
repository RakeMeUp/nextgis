// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { query } from "../../../server/services/query";
import { connectMongo } from "../../../server/utils/connectMongo";
import { getDuration } from "../../../server/utils/getDuration";
import { msToMins } from "../../../server/utils/msToMins";

export default async function minutesHandler(req: NextApiRequest, res: NextApiResponse) {
    await connectMongo();

    const {
        method,
        query: { year, month, day },
    } = req;

    switch (method) {
        case "GET":
            try {
                const entries = await query({ year, month, day });
                const milliseconds = entries.reduce((acc, obj) => acc + getDuration(obj), 0);
                const minutes = msToMins(milliseconds);
                res.status(200).json(minutes);
            } catch (error) {
                res.status(500).send("Internal Server Error");
            }
            break;
        default:
            res.setHeader("Allow", ["GET"]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
