import { Image } from 'fabric/fabric-impl';

export const imageFromURL = ({ fabric }: { fabric: any }) => (
  url: string,
  options: { [key: string]: any } = {}
): Promise<Image> =>
  new Promise((resolve) => {
    fabric.Image.fromURL(url, resolve, options);
  });
