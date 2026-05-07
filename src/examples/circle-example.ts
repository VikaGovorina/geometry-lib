import { ShapeEvent } from "../core/ShapeEvent";
import { Circle } from "../shapes/Circle";

const circle = new Circle(10);
circle.addEventListener(ShapeEvent.Resize, () => {
    console.log("Rectangle resized");
    console.log(circle.toJSON());
});

circle.setRadius(20);
console.log(`Radius: ${circle.getRadius()}`);
console.log(`Diameter: ${circle.getDiameter()}`);
circle.getPerimeter().then((perimeter) => console.log(`Perimeter: ${perimeter}`));
circle.getArea().then((area) => console.log(`Area: ${area}`));
