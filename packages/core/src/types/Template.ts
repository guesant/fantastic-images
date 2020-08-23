import { TemplateStaticImage } from './TemplateStaticImage';
import { TemplateObject } from './TemplateObject';

export interface Template {
  meta?: {
    [key: string]: any;
  };
  model: {
    sketch: {
      width: number;
      height: number;
    };
    staticImages: TemplateStaticImage[];
    fabricExported: {
      objects: TemplateObject[];
    };
  };
}
