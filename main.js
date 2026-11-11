/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ChessBoard.js"
/*!***************************!*\
  !*** ./src/ChessBoard.js ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ChessBoard {\n    constructor(size = 8) {\n        this.size = size;\n        this.board = this.createBoard();\n    }\n\n    createBoard() {\n        const board = [];\n        for (let i = 0; i < this.size; i++) {\n            const row = [];\n            for (let j = 0; j< this.size;j++) {\n                row.push(null);\n            }\n            board.push(row);\n        }\n        return board;\n    }\n\n    isValidPosition(position) {\n        const [x, y] =position;\n        return x >= 0 && x < this.size && y >= 0 && y < this.size;\n    }\n\n    getPossibleMoves([x, y]) {\n        const moves = [\n            [x + 2, y + 1],\n            [x + 2, y - 1],\n            [x - 2, y + 1],\n            [x - 2, y - 1],\n            [x + 1, y + 2],\n            [x + 1, y - 2],\n            [x - 1, y + 2],\n            [x - 1, y - 2]\n        ];\n        const legalMoves = [];\n\n        for (const move of moves) {\n            if (this.isValidPosition(move)) {\n                legalMoves.push(move);\n            }\n        }\n        return legalMoves;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChessBoard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ2hlc3NCb2FyZC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQSw0QkFBNEIsYUFBYTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2tuaWdodC8uL3NyYy9DaGVzc0JvYXJkLmpzPzIyZmMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ2hlc3NCb2FyZCB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSA9IDgpIHtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IHRoaXMuY3JlYXRlQm9hcmQoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVCb2FyZCgpIHtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNpemU7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgajwgdGhpcy5zaXplO2orKykge1xuICAgICAgICAgICAgICAgIHJvdy5wdXNoKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9hcmQucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9XG5cbiAgICBpc1ZhbGlkUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICAgICAgY29uc3QgW3gsIHldID1wb3NpdGlvbjtcbiAgICAgICAgcmV0dXJuIHggPj0gMCAmJiB4IDwgdGhpcy5zaXplICYmIHkgPj0gMCAmJiB5IDwgdGhpcy5zaXplO1xuICAgIH1cblxuICAgIGdldFBvc3NpYmxlTW92ZXMoW3gsIHldKSB7XG4gICAgICAgIGNvbnN0IG1vdmVzID0gW1xuICAgICAgICAgICAgW3ggKyAyLCB5ICsgMV0sXG4gICAgICAgICAgICBbeCArIDIsIHkgLSAxXSxcbiAgICAgICAgICAgIFt4IC0gMiwgeSArIDFdLFxuICAgICAgICAgICAgW3ggLSAyLCB5IC0gMV0sXG4gICAgICAgICAgICBbeCArIDEsIHkgKyAyXSxcbiAgICAgICAgICAgIFt4ICsgMSwgeSAtIDJdLFxuICAgICAgICAgICAgW3ggLSAxLCB5ICsgMl0sXG4gICAgICAgICAgICBbeCAtIDEsIHkgLSAyXVxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBsZWdhbE1vdmVzID0gW107XG5cbiAgICAgICAgZm9yIChjb25zdCBtb3ZlIG9mIG1vdmVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkUG9zaXRpb24obW92ZSkpIHtcbiAgICAgICAgICAgICAgICBsZWdhbE1vdmVzLnB1c2gobW92ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZ2FsTW92ZXM7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGVzc0JvYXJkOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ChessBoard.js\n\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _knight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knight.js */ \"./src/knight.js\");\n/* harmony import */ var _ChessBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChessBoard.js */ \"./src/ChessBoard.js\");\n\n\n\nconst knight = new _knight_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst board = new _ChessBoard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst boardContainer = document.getElementById(\"board\");\nconst statusText = document.getElementById(\"status\");\n\nlet startPosition = null;\nlet endPosition = null;\nlet isAnimating = false;\n\nfunction createVisualBoard() {\n    boardContainer.innerHTML = \"\";\n    for (let row = 0; row < 8; row++) {\n        for (let col = 0; col < 8; col++) {\n            const square = document.createElement(\"div\");\n            square.classList.add(\"square\");\n\n            if ((row + col) % 2 === 0) {\n                square.classList.add(\"light\");\n            } else {\n                square.classList.add(\"dark\");\n            }\n            square.dataset.row = row;\n            square.dataset.col = col;\n            square.innerText = `${row},${col}`;\n\n            square.addEventListener(\"click\", handleSquareClick);\n            boardContainer.appendChild(square);\n        }\n    }\n}\n\nfunction handleSquareClick(event) {\n    if (isAnimating) return;\n\n    const clickedSquare = event.currentTarget;\n    const row = parseInt(clickedSquare.dataset.row);\n    const col = parseInt(clickedSquare.dataset.col);\n    const position = [row, col];\n\n    if (!startPosition || (startPosition && endPosition)) {\n        clearBoardStates();\n        startPosition = position;\n        clickedSquare.classList.add(\"start\");\n        statusText.innerText = \"Click a square to set the END position\";\n    }\n    else if (startPosition && !endPosition) {\n        if (startPosition[0] === row && startPosition[1] === col) return;\n\n        endPosition = position;\n        clickedSquare.classList.add(\"end\");\n        statusText.innerText = \"Calculating the shortest path...\";\n\n        const path = knight.findShortestPath(startPosition, endPosition);\n        animatePath(path);\n    }\n}\n\nfunction animatePath(path) {\n    isAnimating = true;\n    let step = 1;\n\n    const interval = setInterval(() => {\n        if (step >= path.length - 1) {\n            clearInterval(interval);\n            statusText.innerText = `Path completed in ${path.length - 1} moves! Click anywhere to reset.`;\n            isAnimating = false;\n            return;\n        }\n\n        const [row, col] = path[step];\n        const targetSquare = document.querySelector(`[data-row=\"${row}\"][data-col=\"${col}\"]`);\n\n        if (targetSquare) {\n        targetSquare.classList.add(\"path\");\n        targetSquare.innerText = `${step}`;\n        }\n        step++;\n    }, 500);\n}\n\nfunction clearBoardStates() {\n    startPosition = null;\n    endPosition = null;\n    const squares = document.querySelectorAll(\".square\");\n    squares.forEach(square => {\n        const isLight = square.classList.contains(\"light\");\n        square.className = isLight ? \"square light\" : \"square dark\";\n        square.innerText = `[${square.dataset.row},${square.dataset.col}]`;\n    });\n}\n\ncreateVisualBoard();\nconsole.log(knight);\nconsole.log(board);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWlDO0FBQ1E7O0FBRXpDLG1CQUFtQixrREFBTTtBQUN6QixrQkFBa0Isc0RBQVU7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixTQUFTO0FBQy9CLDBCQUEwQixTQUFTO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxJQUFJLEdBQUcsSUFBSTs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsaUJBQWlCO0FBQ3pFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtFQUFrRSxJQUFJLGVBQWUsSUFBSTs7QUFFekY7QUFDQTtBQUNBLG9DQUFvQyxLQUFLO0FBQ3pDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsbUJBQW1CLEdBQUcsbUJBQW1CO0FBQ3hFLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHQvLi9zcmMvaW5kZXguanM/NDA2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgS25pZ2h0IGZyb20gXCIuL2tuaWdodC5qc1wiO1xuaW1wb3J0IENoZXNzQm9hcmQgZnJvbSBcIi4vQ2hlc3NCb2FyZC5qc1wiO1xuXG5jb25zdCBrbmlnaHQgPSBuZXcgS25pZ2h0KCk7XG5jb25zdCBib2FyZCA9IG5ldyBDaGVzc0JvYXJkKCk7XG5jb25zdCBib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmRcIik7XG5jb25zdCBzdGF0dXNUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNcIik7XG5cbmxldCBzdGFydFBvc2l0aW9uID0gbnVsbDtcbmxldCBlbmRQb3NpdGlvbiA9IG51bGw7XG5sZXQgaXNBbmltYXRpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gY3JlYXRlVmlzdWFsQm9hcmQoKSB7XG4gICAgYm9hcmRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA4OyByb3crKykge1xuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCA4OyBjb2wrKykge1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3F1YXJlXCIpO1xuXG4gICAgICAgICAgICBpZiAoKHJvdyArIGNvbCkgJSAyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJsaWdodFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3F1YXJlLmRhdGFzZXQucm93ID0gcm93O1xuICAgICAgICAgICAgc3F1YXJlLmRhdGFzZXQuY29sID0gY29sO1xuICAgICAgICAgICAgc3F1YXJlLmlubmVyVGV4dCA9IGAke3Jvd30sJHtjb2x9YDtcblxuICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVTcXVhcmVDbGljayk7XG4gICAgICAgICAgICBib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVTcXVhcmVDbGljayhldmVudCkge1xuICAgIGlmIChpc0FuaW1hdGluZykgcmV0dXJuO1xuXG4gICAgY29uc3QgY2xpY2tlZFNxdWFyZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgY29uc3Qgcm93ID0gcGFyc2VJbnQoY2xpY2tlZFNxdWFyZS5kYXRhc2V0LnJvdyk7XG4gICAgY29uc3QgY29sID0gcGFyc2VJbnQoY2xpY2tlZFNxdWFyZS5kYXRhc2V0LmNvbCk7XG4gICAgY29uc3QgcG9zaXRpb24gPSBbcm93LCBjb2xdO1xuXG4gICAgaWYgKCFzdGFydFBvc2l0aW9uIHx8IChzdGFydFBvc2l0aW9uICYmIGVuZFBvc2l0aW9uKSkge1xuICAgICAgICBjbGVhckJvYXJkU3RhdGVzKCk7XG4gICAgICAgIHN0YXJ0UG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgY2xpY2tlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3RhcnRcIik7XG4gICAgICAgIHN0YXR1c1RleHQuaW5uZXJUZXh0ID0gXCJDbGljayBhIHNxdWFyZSB0byBzZXQgdGhlIEVORCBwb3NpdGlvblwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChzdGFydFBvc2l0aW9uICYmICFlbmRQb3NpdGlvbikge1xuICAgICAgICBpZiAoc3RhcnRQb3NpdGlvblswXSA9PT0gcm93ICYmIHN0YXJ0UG9zaXRpb25bMV0gPT09IGNvbCkgcmV0dXJuO1xuXG4gICAgICAgIGVuZFBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIGNsaWNrZWRTcXVhcmUuY2xhc3NMaXN0LmFkZChcImVuZFwiKTtcbiAgICAgICAgc3RhdHVzVGV4dC5pbm5lclRleHQgPSBcIkNhbGN1bGF0aW5nIHRoZSBzaG9ydGVzdCBwYXRoLi4uXCI7XG5cbiAgICAgICAgY29uc3QgcGF0aCA9IGtuaWdodC5maW5kU2hvcnRlc3RQYXRoKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcbiAgICAgICAgYW5pbWF0ZVBhdGgocGF0aCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhbmltYXRlUGF0aChwYXRoKSB7XG4gICAgaXNBbmltYXRpbmcgPSB0cnVlO1xuICAgIGxldCBzdGVwID0gMTtcblxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAoc3RlcCA+PSBwYXRoLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgc3RhdHVzVGV4dC5pbm5lclRleHQgPSBgUGF0aCBjb21wbGV0ZWQgaW4gJHtwYXRoLmxlbmd0aCAtIDF9IG1vdmVzISBDbGljayBhbnl3aGVyZSB0byByZXNldC5gO1xuICAgICAgICAgICAgaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBwYXRoW3N0ZXBdO1xuICAgICAgICBjb25zdCB0YXJnZXRTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9XCIke3Jvd31cIl1bZGF0YS1jb2w9XCIke2NvbH1cIl1gKTtcblxuICAgICAgICBpZiAodGFyZ2V0U3F1YXJlKSB7XG4gICAgICAgIHRhcmdldFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwicGF0aFwiKTtcbiAgICAgICAgdGFyZ2V0U3F1YXJlLmlubmVyVGV4dCA9IGAke3N0ZXB9YDtcbiAgICAgICAgfVxuICAgICAgICBzdGVwKys7XG4gICAgfSwgNTAwKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJCb2FyZFN0YXRlcygpIHtcbiAgICBzdGFydFBvc2l0aW9uID0gbnVsbDtcbiAgICBlbmRQb3NpdGlvbiA9IG51bGw7XG4gICAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3F1YXJlXCIpO1xuICAgIHNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICBjb25zdCBpc0xpZ2h0ID0gc3F1YXJlLmNsYXNzTGlzdC5jb250YWlucyhcImxpZ2h0XCIpO1xuICAgICAgICBzcXVhcmUuY2xhc3NOYW1lID0gaXNMaWdodCA/IFwic3F1YXJlIGxpZ2h0XCIgOiBcInNxdWFyZSBkYXJrXCI7XG4gICAgICAgIHNxdWFyZS5pbm5lclRleHQgPSBgWyR7c3F1YXJlLmRhdGFzZXQucm93fSwke3NxdWFyZS5kYXRhc2V0LmNvbH1dYDtcbiAgICB9KTtcbn1cblxuY3JlYXRlVmlzdWFsQm9hcmQoKTtcbmNvbnNvbGUubG9nKGtuaWdodCk7XG5jb25zb2xlLmxvZyhib2FyZCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ },

/***/ "./src/knight.js"
/*!***********************!*\
  !*** ./src/knight.js ***!
  \***********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ChessBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChessBoard.js */ \"./src/ChessBoard.js\");\n\n\nclass Knight {\n\n    constructor() {\n        this.board = new _ChessBoard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    }\n\n    findShortestPath(start, end) {\n        if (\n            !this.board.isValidPosition(start) ||\n            !this.board.isValidPosition(end)\n        ) {\n            throw new Error(\"Invalid start or end position\");\n        }\n\n        const queue = [{position: start, path: [start]}];\n        const visited = new Set();\n\n        visited.add(start.toString());\n\n        while (queue.length > 0) {\n            const { position, path } = queue.shift();\n\n            if (position[0] === end[0] && position[1] === end[1]) {\n                return path;\n            }\n            const nextMoves = this.board.getPossibleMoves(position);\n            \n            for (const move of nextMoves) {\n                if (!visited.has(move.toString())) {\n                    visited.add(move.toString());\n\n                    queue.push({ position: move, path: [...path, move] });\n                }\n            }\n        }\n        return null;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Knight);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMva25pZ2h0LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXdDOztBQUV4Qzs7QUFFQTtBQUNBLHlCQUF5QixzREFBVTtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsK0JBQStCO0FBQ3ZEOztBQUVBOztBQUVBO0FBQ0Esb0JBQW9CLGlCQUFpQjs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsdUNBQXVDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va25pZ2h0Ly4vc3JjL2tuaWdodC5qcz8zOTc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGVzc0JvYXJkIGZyb20gXCIuL0NoZXNzQm9hcmQuanNcIlxuXG5jbGFzcyBLbmlnaHQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQ2hlc3NCb2FyZCgpO1xuICAgIH1cblxuICAgIGZpbmRTaG9ydGVzdFBhdGgoc3RhcnQsIGVuZCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhdGhpcy5ib2FyZC5pc1ZhbGlkUG9zaXRpb24oc3RhcnQpIHx8XG4gICAgICAgICAgICAhdGhpcy5ib2FyZC5pc1ZhbGlkUG9zaXRpb24oZW5kKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgc3RhcnQgb3IgZW5kIHBvc2l0aW9uXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcXVldWUgPSBbe3Bvc2l0aW9uOiBzdGFydCwgcGF0aDogW3N0YXJ0XX1dO1xuICAgICAgICBjb25zdCB2aXNpdGVkID0gbmV3IFNldCgpO1xuXG4gICAgICAgIHZpc2l0ZWQuYWRkKHN0YXJ0LnRvU3RyaW5nKCkpO1xuXG4gICAgICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCB7IHBvc2l0aW9uLCBwYXRoIH0gPSBxdWV1ZS5zaGlmdCgpO1xuXG4gICAgICAgICAgICBpZiAocG9zaXRpb25bMF0gPT09IGVuZFswXSAmJiBwb3NpdGlvblsxXSA9PT0gZW5kWzFdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXh0TW92ZXMgPSB0aGlzLmJvYXJkLmdldFBvc3NpYmxlTW92ZXMocG9zaXRpb24pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1vdmUgb2YgbmV4dE1vdmVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF2aXNpdGVkLmhhcyhtb3ZlLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZpc2l0ZWQuYWRkKG1vdmUudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcXVldWUucHVzaCh7IHBvc2l0aW9uOiBtb3ZlLCBwYXRoOiBbLi4ucGF0aCwgbW92ZV0gfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgS25pZ2h0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/knight.js\n\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;