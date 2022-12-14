import { Entry } from "../../Interfaces/Entry";
import { getDuration } from "./getDuration";

export const getAllMs = (array: Entry[]) => {
    return array.reduce((acc, obj) => acc + getDuration(obj), 0);
};
