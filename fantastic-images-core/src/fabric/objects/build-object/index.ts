import { Object as FabricObject } from "fabric/fabric-impl";
import memoize from "lodash.memoize";

const findConstructor = (fabric: any) => (type: string) => {
  const constructor = Object.keys(fabric).find(
    (item) => item.toLowerCase() === type.toLowerCase()
  );
  if (constructor) {
    return fabric[constructor] || null;
  }
  return null;
};

export const buildObject = (fabric: any) => {
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
