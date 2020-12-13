import { TemplateSchema } from "./TemplateSchema";

export const isValidTemplate = (template: any) =>
  TemplateSchema.validateSync(template);
