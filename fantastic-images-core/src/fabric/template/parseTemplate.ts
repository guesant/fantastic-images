import { ITemplate } from "../../types/ITemplate";
import { isValidTemplate } from "./isValidTemplate";
import { TemplateSchema } from "./TemplateSchema";

export const parseTemplate = (template: ITemplate | any) => {
  if (isValidTemplate(template)) {
    return (TemplateSchema.validateSync(template) as unknown) as ITemplate;
  }
  return null;
};
