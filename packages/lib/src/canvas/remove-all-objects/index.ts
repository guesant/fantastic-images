import { fabric as FabricTypes } from 'fabric';

export const removeAllObjects = ({
  canvas,
}: {
  canvas: FabricTypes.Canvas;
}) => {
  canvas.getObjects().forEach((obj) => canvas.remove(obj));
};
