import { beforeEach, describe, expect, test } from "@jest/globals";
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

    test("every step in the path should be two squares in one direction and one square in the other", () => {
        const path = knight.findShortestPath([0, 0], [7, 7]);
        for (let i = 1; i < path.length; i++) {
            const previous = path[i - 1];
            const current = path[i];
            const rowDifference = Math.abs(current[0] - previous[0]);
            const colDifference = Math.abs(current[1] - previous[1]);
            expect([[1, 2], [2, 1]]).toContainEqual([rowDifference, colDifference]);
        }
    });

    test("should throw an error for an invalid starting position", () => {
        expect(() => {
            knight.findShortestPath([9, 0], [7, 7]);
        }).toThrow("Invalid start or end position");
    })

    test("should throw an error for an invalid ending position", () => {
        expect(() => {
            knight.findShortestPath([0, 0], [8, 7]);
        }).toThrow("Invalid start or end position");
    });

    test("should find the shortest path from a different starting position", () => {
        const path = knight.findShortestPath([3, 3], [4, 5]);

        expect(path).toHaveLength(2);
        expect(path[0]).toEqual([3, 3]);
        expect(path[1]).toEqual([4, 5]);
    });


});
