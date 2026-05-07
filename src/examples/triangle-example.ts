import { ShapeEvent } from "../core/ShapeEvent";
import { Triangle } from "../shapes/Triangle";

const triangle = new Triangle(3, 4, 5);
triangle.addEventListener(ShapeEvent.Resize, () => {
    console.log("Rectangle resized");
    console.log(triangle.toJSON());
});

triangle.setSize(6, 8, 10);
triangle.setSide("a", 12);
const triangleSize = triangle.getSize();
console.log(`Size: ${triangleSize.a}, ${triangleSize.b}, ${triangleSize.c}`);
triangle.getPerimeter().then((perimeter) => console.log(`Perimeter: ${perimeter}`));
triangle.getArea().then((area) => console.log(`Area: ${area}`));