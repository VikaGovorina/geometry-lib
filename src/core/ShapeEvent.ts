
export const ShapeEvent = {
    Resize: "resize",
} as const;

export type ShapeEventType = typeof ShapeEvent[keyof typeof ShapeEvent];
