import { TemplateSchema } from "./TemplateSchema";

export const isValidTemplate = (template: any) =>
  TemplateSchema.isValidSync(template);
