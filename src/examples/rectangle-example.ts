import { ShapeEvent } from "../core/ShapeEvent";
import { Rectangle } from "../shapes/Rectangle";

const rect = new Rectangle(10, 15);
rect.addEventListener(ShapeEvent.Resize, () => {
    console.log("Rectangle resized");
    console.log(rect.toJSON());
});

console.log(rect.getId());
rect.setWidth(20);
rect.setHeight(30);
rect.setSize(40, 50);
rect.getPerimeter().then((perimeter) => console.log(`Perimeter: ${perimeter}`));
rect.getArea().then((area) => console.log(`Area: ${area}`));

