import { ITemplate } from "../types/ITemplate";
import { TemplateSchema } from "./TemplateSchema";

export class Template {
  static parseTemplate = (template: ITemplate | any) => {
    if (Template.isValidTemplate(template)) {
      return (TemplateSchema.validateSync(template) as unknown) as ITemplate;
    }
    return null;
  };

  static isValidTemplate = (template: any) =>
    TemplateSchema.isValidSync(template);
}
