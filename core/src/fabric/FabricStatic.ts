import { ITemplateStaticImage } from "../types/ITemplateStaticImage";
import { ITemplate } from "../types/ITemplate";

export class FabricStatic {
  static getStaticFromTemplate = (template: ITemplate) =>
    FabricStatic.getStatic(template.model.staticImages);

  static getStatic = (staticImages: ITemplateStaticImage[]) => (pos: string) =>
    staticImages.filter(({ position }) => pos == position);
}
