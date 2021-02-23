import { Canvas } from "fabric/fabric-impl";

export class FabricCanvas {
  static removeAllObjects = (canvas: Canvas) => {
    canvas.getObjects().forEach((obj) => canvas.remove(obj));
  };
}
