import { IEmployee } from "../interfaces/employee";
import { firstNames, lastNames, positions } from "./constants";

// returns a random number between 0 and ceiling (exclusive)
export const randInt = (ceiling: number): number => {
    return Math.floor(Math.random() * ceiling);
}

// returns a random employee
export const randEmployee = (): IEmployee => {
    return {
        id: randInt(100) + 1,
        name: firstNames[randInt(firstNames.length)] + ' ' + lastNames[randInt(lastNames.length)],
        position: positions[randInt(positions.length)]
    }
}