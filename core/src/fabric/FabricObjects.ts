import {
  IImageOptions,
  Image,
  Object as FabricObject,
} from "fabric/fabric-impl";
import memoize from "lodash.memoize";

const findConstructor = (fabric: any) => (type: string) => {
  const constructor = Object.keys(fabric).find(
    (item) => item.toLowerCase() === type.toLowerCase()
  );
  return constructor ? fabric[constructor] || null : null;
};

export class FabricObjects {
  static imageFromURL = (fabric: any) => (
    url: string,
    options: IImageOptions = {}
  ): Promise<Image> =>
    new Promise((resolve) => {
      fabric.Image.fromURL(url, resolve, options);
    });

  static buildObject = (fabric: any) => {
    const FindConstructor = memoize(findConstructor(fabric));
    return (object: FabricObject) =>
      new Promise((resolve) => {
        if (object.type) {
          const constructor = FindConstructor(object.type);
          if (constructor.fromObject) {
            constructor.fromObject(object, resolve);
          }
        }
        resolve(new fabric.Object());
      });
  };
}
