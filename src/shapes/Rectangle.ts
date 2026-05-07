import { Shape } from "../core/Shape";
import { ShapeEvent } from "../core/ShapeEvent";
import { checkPositiveNumber } from "../utils/heplers";

/**
 * Represents a rectangle shape.
 */
export class Rectangle extends Shape {
    
    constructor(
        private width: number,
        private height: number
    ) {
        super();
        checkPositiveNumber(width, height);
    }

    /**
     * 
     * @returns rectangle width.
     */
    getWidth(): number {
        return this.width;
    }

    /**
     * 
     * @returns rectangle height.
     */
    getHeight(): number {
        return this.height;
    }

    /**
     * 
     * @returns calculated ractangle area
     */
    public async getArea(): Promise<number> {
        return this.width * this.height;
    }

    /**
     * 
     * @returns calculated rectangle perimeter
     */
    public async getPerimeter(): Promise<number> {
        return 2 * (this.width + this.height);
    }

    /**
     * Updates the rectangle width.
     * 
     * @param width new rectangle width
     */
    public setWidth(width: number): void {
        checkPositiveNumber(width);
        this.width = width;
        this.emit(ShapeEvent.Resize);
    }

    /**
     * Updates the rectangle height.
     * 
     * @param height new rectangle height
     */
    public setHeight(height: number): void {
        checkPositiveNumber(height);
        this.height = height;
        this.emit(ShapeEvent.Resize);
    }

    /**
     * Updates the rectangle width and height.
     * 
     * @param width new rectangle width
     * @param height new rectangle height
     */
    public setSize(width: number, height: number): void {
        checkPositiveNumber(width, height);
        this.width = width;
        this.height = height;
        this.emit(ShapeEvent.Resize);
    }

    /**
     * 
     * @returns a JSON representation of the rectangle
     */
    public toJSON() {
        return {
            type: "rectangle",
            width: this.width,
            height: this.height,
        };
    }
}