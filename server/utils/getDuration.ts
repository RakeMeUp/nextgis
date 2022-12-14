import { Entry } from "../../Interfaces/Entry";

export function getDuration(e: Entry): number {
    return Math.abs(e.Start.getTime() - e.End.getTime());
}
