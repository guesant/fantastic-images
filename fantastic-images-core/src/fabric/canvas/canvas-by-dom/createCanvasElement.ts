import { ITemplate } from "../../../types/ITemplate";

export const createCanvasElement = (
  document: Document,
  template: ITemplate
) => {
  const canvasElement = document.createElement("canvas");
  canvasElement.width = Math.abs(template.model.sketch.width) || 0;
  canvasElement.height = Math.abs(template.model.sketch.height) || 0;
  return canvasElement;
};
