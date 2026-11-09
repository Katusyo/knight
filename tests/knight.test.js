import { describe, expect, test } from "@jest/globals";
import Knight from "../src/knight.js";

describe(" Knight Travails Shortest Path Tests", () => {
    let knight;

    beforeEach(() => {
        knight = new Knight();
    });

    test("0-move path should be handled correctly", () => {
        const start = [0, 0];
        const end = [0, 0];
        const path = knight.findShortestPath(start, end);
        expect(path).toEqual([[0, 0]]);
    });

    test("1-move path should be handled correctly", () => {
        const start =[0, 0];
        const end = [1, 2];
        const path = knight.findShortestPath(start, end);
        expect(path).toEqual([[0, 0], [1, 2]]);
    });

    test("2-move path should be handled correctly", () => {
        const start = [0, 0];
        const end = [3, 3];
        const path = knight.findShortestPath(start, end);
        expect(path.length).toBe(3);
        expect(path[0]).toEqual([0, 0]);
        expect(path[2]).toEqual([3, 3]);
        const validMiddleSteps = [[1, 2], [2, 1]];
        expect(validMiddleSteps).toContainEqual(path[1]);
    });

    test("should find a long path across the board", () => {
        const start = [0, 0];
        const end = [7, 7];
        const path = knight.findShortestPath(start, end);
        expect(path.length - 1).toBe(6);
        expect(path[0]).toEqual([0, 0]);
        expect(path[path.length - 1]).toEqual([7, 7]);
    });
});
