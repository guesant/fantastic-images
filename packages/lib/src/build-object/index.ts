import { SupportedObjects } from '@fantastic-images/types';
import { fabric as FabricTypes } from 'fabric';

export const buildObject = ({ fabric }: { fabric: any }) => ({
  object,
}: {
  object: FabricTypes.Object;
}): Promise<SupportedObjects> =>
  new Promise((resolve) => {
    switch (object.type) {
      case 'image':
        return fabric.Image.fromObject(object, resolve);
      case 'textbox':
        return fabric.Textbox.fromObject(object, resolve);
      default:
        return new fabric.Object() as FabricTypes.Object;
    }
  });
