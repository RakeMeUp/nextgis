// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { connectMongo } from "../../../../../../server/utils/connectMongo";
import { getMonthOfCurrentYear } from "../../../../../../server/services/getMonthOfCurrentYear";

export default async function monthIdHandler(req: NextApiRequest, res: NextApiResponse) {
    await connectMongo();

    const {
        method,
        query: { month },
    } = req;
    switch (method) {
        case "GET":
            try {
                if (!month) throw Error("no Month");
                const entries = await getMonthOfCurrentYear(+month);
                res.status(200).json(entries);
            } catch (error) {
                res.status(500).send("Internal Server Error");
            }
            break;
        default:
            res.setHeader("Allow", ["GET"]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
