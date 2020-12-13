import { ITemplateObject } from "./ITemplateObject";
import { ITemplateStaticImage } from "./ITemplateStaticImage";

export type ITemplate<
  Meta = {
    [key: string]: any;
  }
> = {
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
