import { ITemplate } from "../../../types/ITemplate";
import { getStatic } from "../get-static/index";

export const getStaticFromTemplate = (template: ITemplate) =>
  getStatic(template.model.staticImages);
