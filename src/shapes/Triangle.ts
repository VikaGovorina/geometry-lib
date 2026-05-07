import { Shape } from "../core/Shape";
import { ShapeEvent } from "../core/ShapeEvent";
import { checkPositiveNumber } from "../utils/heplers";

/**
 * Represents a triangle shape.
 */
export class Triangle extends Shape {

    constructor(
        private a: number,
        private b: number,
        private c: number
    ) {
        super();
        this.checkTriangleSides();
        checkPositiveNumber(a, b, c);
    }

    /**
     * Checks if the triangle sides are valid
     */
    private checkTriangleSides(): void {
        if (
            this.a + this.b <= this.c ||
            this.a + this.c <= this.b ||
            this.b + this.c <= this.a
        ) {
            throw new Error("Invalid triangle sides, such a triangle does not exist");
        }
    }

    /**
     * 
     * @returns a triangle sides as an object
     */
    public getSize(): {
        a: number,
        b: number,
        c: number
    } {
        return { a: this.a, b: this.b, c: this.c };
    }

    /**
     * updates the triangle sides
     * 
     * @param a first side
     * @param b second side
     * @param c third side
     */
    public setSize(a: number, b: number, c: number): void {
        checkPositiveNumber(a, b, c);
        this.a = a;
        this.b = b;
        this.c = c;
        this.emit(ShapeEvent.Resize);
    }

    /**
     * updates the chosen triangle side
     * 
     * @param side side to change
     * @param value new side value
     */
    public setSide(side: "a" | "b" | "c", value: number): void {
        checkPositiveNumber(value);
        this[side] = value;
        this.emit(ShapeEvent.Resize);
    }

    /**
     * 
     * @returns calculated circle perimeter
     */
    public getPerimeter(): Promise<number> {
        return Promise.resolve(this.a + this.b + this.c);
    }

    /**
     * 
     * @returns calculated circle area
     */
    public getArea(): Promise<number> {
        return this.getPerimeter().then((perimeter) => {
            const p = perimeter / 2;
            return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        });
    }

    /**
     * 
     * @returns a JSON representation of the circle.
     */
    public toJSON() {
        return {
            type: "triangle",
            a: this.a,
            b: this.b,
            c: this.c
        };
    }
}