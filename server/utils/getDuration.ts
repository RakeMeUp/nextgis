import { Entry } from "../../Interfaces/Entry";

export function getDuration(e: Entry): number {
    return Math.abs(e.data.Start.getTime() - e.data.End.getTime());
}
