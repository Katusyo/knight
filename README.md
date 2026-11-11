# Knight's Travails

A knight's shortest-path solver in JavaScript. Given a start and an end square on a standard 8x8 chessboard, it finds the shortest route a knight can take between them -- and shows it on a clickable, animated board.

**Live demo.** https://katusyo.github.io/knight/

## Built with

- JavaScript (ES modules)
- webpack 5 with HtmlWebpackPlugin, for bundling and the live demo
- Jest with Babel, for the test suite

## How it works

The board is treated as a graph: every square is a node, and every legal knight move from that square is an edge. `Knight.findShortestPath(start, end)` then runs a **breadth-first search** from the start square:

- Squares are explored one "move layer" at a time, so the first time the end square is reached, the path found is guaranteed to be the shortest.
- A visited set makes sure each square is only processed once.
- Each queue entry carries the path taken to reach it, so the winning route can be returned in full, not just its length

Positions are `[row, col]` pairs, each from 0 to 7. A start or end position off the board throws an `"invalid start or end position"` error.

The code is split into two classes:

-`ChessBoard` -- knows the board size, check whether a position is on the board, andgenerates the legal knight moves from any square.
- `Knight` -- runs the search itself, using a `ChessBoard` for more generation and validation.

## Using the demo

1. Click any square to set the **start** (it turns green).
2. Click a second square to set the **end** (it turns red).
3. The shorted path animates across the board one step at a time, numbered as it goes, and the status line reports the move count.
4. Click anywhere to reset and try another pair.

## Example

import knight from "./src/knight.js";

const knight = new Knight();
knight.findShortestPath([0, 0], [7, 7]);
// -> [[0, 0], [2, 1], [4, 2], [6, 3], [4, 4], [6, 5], [7, 7]] (6 moves)

## Run it locally

git clone https://github.com/Katusyo/knight.git
cd knight
npm install

- Run the test suite: `npm test`
- Run the demo board locally: `npx webpack serve`, then open the address it prints

## Tests

The Jest suite (`tests/knight.test.js`) covers:

- a one-move path (`[0, 0]` -> `[1, 2]`)
- a two-move path (`[0, 0]` -> `[3, 3]`)
- Start equal to end (a single-square path)
- corner to corner (`[0, 0]` -> `[7, 7]`) in the minimum 6 moves
- Errors thrown for off-board start and end positions

  ## About

  Built as part of The Odin Project's JavaScript course (Knight Travails project).
