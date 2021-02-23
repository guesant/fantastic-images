import { Canvas } from "fabric/fabric-impl";
import { nanoid } from "nanoid";
import { ITemplate } from "../types/ITemplate";

export class FabricCanvasByDom {
  static getCanvas = (fabric: any) => (document: Document) => (
    wrapper: HTMLElement = document.createElement("div"),
    id: string = nanoid()
  ) => (template: ITemplate): Canvas => {
    FabricCanvasByDom.removeEachElementChild(wrapper);
    const canvasElement = FabricCanvasByDom.createCanvasElement(
      document,
      template
    );
    canvasElement.id = id;
    wrapper.append(canvasElement);
    return new fabric.Canvas(id);
  };

  static createCanvasElement = (document: Document, template: ITemplate) => {
    const canvasElement = document.createElement("canvas");
    canvasElement.width = Math.abs(template.model.sketch.width) || 0;
    canvasElement.height = Math.abs(template.model.sketch.height) || 0;
    return canvasElement;
  };

  static removeEachElementChild = (element: HTMLElement) =>
    Array.from(element.children || []).forEach((child) => child.remove());
}
