
export const ShapeEvent = {
    Resize: "resize",
    // Remove: "remove",
} as const;

export type ShapeEventType = typeof ShapeEvent[keyof typeof ShapeEvent];