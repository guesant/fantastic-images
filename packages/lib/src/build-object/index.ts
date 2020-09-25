import { SupportedObjects } from '@fantastic-images/types';
import { Object } from 'fabric/fabric-impl';

export const buildObject = ({ fabric }: { fabric: any }) => ({
  object,
}: {
  object: Object;
}): Promise<SupportedObjects> =>
  new Promise((resolve) => {
    switch (object.type) {
      case 'image':
        return fabric.Image.fromObject(object, resolve);
      case 'textbox':
        return fabric.Textbox.fromObject(object, resolve);
      default:
        return new fabric.Object() as Object;
    }
  });
