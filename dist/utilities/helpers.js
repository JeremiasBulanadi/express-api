"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randEmployee = exports.randInt = void 0;
const constants_1 = require("./constants");
// returns a random number between 0 and ceiling (exclusive)
const randInt = (ceiling) => {
    return Math.floor(Math.random() * ceiling);
};
exports.randInt = randInt;
// returns a random employee
const randEmployee = () => {
    return {
        id: (0, exports.randInt)(100) + 1,
        name: constants_1.firstNames[(0, exports.randInt)(constants_1.firstNames.length)] + ' ' + constants_1.lastNames[(0, exports.randInt)(constants_1.lastNames.length)],
        position: constants_1.positions[(0, exports.randInt)(constants_1.positions.length)]
    };
};
exports.randEmployee = randEmployee;
//# sourceMappingURL=helpers.js.map