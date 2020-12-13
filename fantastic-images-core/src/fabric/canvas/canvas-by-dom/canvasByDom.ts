import { Canvas } from "fabric/fabric-impl";
import { ITemplate } from "../../../types/ITemplate";
import { nanoid } from "nanoid";
import { createCanvasElement } from "./createCanvasElement";
import { removeEachElementChild } from "./removeEachElementChild";

export const canvasByDom = (fabric: any) => (document: Document) => (
  wrapper: HTMLElement = document.createElement("div"),
  id: string = nanoid()
) => (template: ITemplate): Canvas => {
  removeEachElementChild(wrapper);
  const canvasElement = createCanvasElement(document, template);
  canvasElement.id = id;
  wrapper.append(canvasElement);
  return new fabric.Canvas(id);
};
