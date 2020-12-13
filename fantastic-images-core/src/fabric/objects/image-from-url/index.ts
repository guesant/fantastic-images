import { Image, IImageOptions } from "fabric/fabric-impl";

export const imageFromURL = (fabric: any) => (
  url: string,
  options: IImageOptions = {}
): Promise<Image> =>
  new Promise((resolve) => {
    fabric.Image.fromURL(url, resolve, options);
  });
