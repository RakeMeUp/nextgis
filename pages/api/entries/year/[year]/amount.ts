// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getYear } from "../../../../../server/services/getYear";
import { connectMongo } from "../../../../../server/utils/connectMongo";

export default async function amountHandler(req: NextApiRequest, res: NextApiResponse) {
    await connectMongo();

    const {
        method,
        query: { year },
    } = req;
    switch (method) {
        case "GET":
            try {
                if (!year) throw new Error("no year");
                const entries = await getYear(+year);
                res.status(200).json(entries.length);
            } catch (err) {
                res.status(500).send("Internal Server Error");
            }
            break;
        default:
            res.setHeader("Allow", ["GET"]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
