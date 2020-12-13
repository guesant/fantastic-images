import { ITemplateStaticImage } from "../../../types/ITemplateStaticImage";

export const getStatic = (staticImages: ITemplateStaticImage[]) => (
  pos: string
) => staticImages.filter(({ position }) => pos == position);
