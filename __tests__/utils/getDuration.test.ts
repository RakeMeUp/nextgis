import { describe, expect, test } from "@jest/globals";
import { getDuration } from "../../server/utils/getDuration";
import { mockEntries } from "../__mocks__/mockEntries";

describe("calculates duration of an Entry in milliseconds", () => {
    test("first Entry should be ", () => {
        expect(getDuration(mockEntries[0])).toBe(10000);
    });
    test("second Entry should be ", () => {
        expect(getDuration(mockEntries[1])).toBe(20000);
    });
    test("third Entry should be ", () => {
        expect(getDuration(mockEntries[2])).toBe(5000);
    });
    test("fourth Entry should be ", () => {
        expect(getDuration(mockEntries[3])).toBe(3000);
    });
    test("fifth Entry should be ", () => {
        expect(getDuration(mockEntries[4])).toBe(1000);
    });
    test("sixth Entry should be ", () => {
        expect(getDuration(mockEntries[5])).toBe(39000);
    });
});
