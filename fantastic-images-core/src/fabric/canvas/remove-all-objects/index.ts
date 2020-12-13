import { Canvas } from "fabric/fabric-impl";

export const removeAllObjects = (canvas: Canvas) => {
  canvas.getObjects().forEach((obj) => canvas.remove(obj));
};
