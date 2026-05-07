import { ShapeEventType } from "./ShapeEvent";

/**
 * Abstract class representing a geometric shape.
 */
export abstract class Shape extends EventTarget {
    /**
     * Unique identifier for the shape.
     */
    protected readonly id: string;

    constructor() {
        super();
        this.id = crypto.randomUUID();
    }

    /**
     * Returns the unique identifier for the shape.
     */
    public getId(): string {
        return this.id;
    }

    /**
     * @returns the calculated area of the shape.
     */
    public abstract getArea(): Promise<number>;

    /**
     * @returns the calculated perimeter of the shape.
     */
    public abstract getPerimeter(): Promise<number>;

    /**
     * @returns a JSON representation of the shape.
     */
    public abstract toJSON(): object;

    /**
     * Dispatches an event with the specified name.
     * 
     * @param eventName The name of the event to dispatch.
     */
    protected emit(eventName: ShapeEventType): void {
        this.dispatchEvent(new Event(eventName));
    }
}