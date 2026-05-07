import { InvalidShapeParamError } from "../core/errors"

/**
 * Checks that all values are positive
 * 
 * @param values numbers to check
 * 
 * @throws Error if at least one number is not positive
 */
export const checkPositiveNumber = (...values: number[]): void => {
    for (const value of values) {
        if (value <= 0) {
            throw new InvalidShapeParamError(`Invalid value: ${value}. Values must be positive`);
        }
    }
}
