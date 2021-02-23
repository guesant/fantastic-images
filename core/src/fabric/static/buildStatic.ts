import { Image } from "fabric/fabric-impl";
import { ITemplate } from "../../types/ITemplate";
import { ITemplateStaticImage } from "../../types/ITemplateStaticImage";
import { FabricObjects } from "../FabricObjects";

export const buildStatic = (fabric: any) => (template: ITemplate) => async (
  url: ITemplateStaticImage["url"]
): Promise<Image> => {
  const img = await FabricObjects.imageFromURL(fabric)(url);
  if (!img) return img;
  const {
    model: { sketch },
  } = template;
  ([
    ["scaleX", "width", sketch.width],
    ["scaleY", "height", sketch.height],
  ] as [any, any, number][]).forEach(([scaleAxis, currentSize, targetSize]) => {
    img.set({ [scaleAxis]: targetSize / (img.get(currentSize) || 0) });
  });
  img.set("selectable", false);
  return img;
};
