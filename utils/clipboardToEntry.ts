// Paste structure:
// Project_name \t Managed_Area \t LAS_name \t Operator \t Date \t Start \t End \t Duration \r\n
//      0               1            2           3          4       5       6       7

import { Entry } from "../Interfaces/Entry";

function excelToObject(clipboardData: string, userId: string): Entry[] {
    let rowsArr: Array<string> = clipboardData.trim().split("\n");
    let resultArr: Entry[] = rowsArr.map((row) => {
        const trimmed = row.trim().split("\t");

        if (trimmed.length != 8) throw new Error("Paste Error: Wrong Format");
        const [project, area, las, operator, date, start, end, _] = trimmed;

        return {
            data: {
                Project: project,
                ManagedArea: area,
                LAS: las,
                Operator: operator,
                Start: new Date(`${date} ${start}`),
                End: new Date(`${date} ${end}`),
            },
            userId: userId,
        };
    });

    return resultArr;
}

export default excelToObject;
