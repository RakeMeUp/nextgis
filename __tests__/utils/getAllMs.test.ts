import { describe, expect, test } from "@jest/globals";
import { getAllMs } from "../../server/utils/getAllMs";
import { mockEntries } from "../__mocks__/mockEntries";
describe("accumulates duration of array in milliseconds", () => {
    test("10sec + 20sec should be 30000", () => {
        expect(getAllMs([mockEntries[0], mockEntries[1]])).toBe(30000);
    });
});
