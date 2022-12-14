// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { connectMongo } from "../../../../../server/utils/connectMongo";
import { getCurrentMonth } from "../../../../../server/services/getCurrentMonth";

export default async function monthHandler(req: NextApiRequest, res: NextApiResponse) {
    await connectMongo();

    const { method } = req;
    switch (method) {
        case "GET":
            try {
                const entries = await getCurrentMonth();
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
