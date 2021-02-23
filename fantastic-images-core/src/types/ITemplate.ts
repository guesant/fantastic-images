import { ITemplateObject } from "./ITemplateObject";
import { ITemplateStaticImage } from "./ITemplateStaticImage";

export type ITemplate<Meta extends object = { [key: string]: any }> = {
  meta?: Meta;
  model: {
    sketch: {
      width: number;
      height: number;
    };
    staticImages: ITemplateStaticImage[];
    fabricExported: {
      objects: ITemplateObject[];
    };
  };
};
