import { Shape } from "../core/Shape";
import { ShapeEvent } from "../core/ShapeEvent";
import { checkPositiveNumber } from "../utils/heplers";

/**
 * Represents a circle shape.
 */
export class Circle extends Shape {

    constructor(private radius: number) {
        super();
        checkPositiveNumber(radius);
    }

    /**
     * 
     * @returns cirlce radius
     */
    public getRadius(): number {
        return this.radius;
    }

    /**
     * updates the circle radius
     * 
     * @param radius new circle radius
     */
    public setRadius(radius: number): void {
        checkPositiveNumber(radius);
        this.radius = radius;
        this.emit(ShapeEvent.Resize);
    }

    /**
     * 
     * @returns calculated circle perimeter
     */
    public async getPerimeter(): Promise<number> {
        return 2 * Math.PI * this.radius;
    }

    /**
     * 
     * @returns calculater circle area
     */
    public async getArea(): Promise<number> {
        return Math.PI * this.radius * this.radius;
    }

    /**
     * 
     * @returns calculated circle diameter
     */
    public getDiameter(): number {
        return this.radius * 2;
    }

    /**
     * 
     * @returns a JSON representation of the circle
     */
    public toJSON() {
        return {
            type: "circle",
            radius: this.radius
        };
    }
}