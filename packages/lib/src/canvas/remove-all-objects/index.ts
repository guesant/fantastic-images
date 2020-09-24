import { fabric as FabricTypes } from 'fabric';

const removeAllObjects = ({ canvas }: { canvas: FabricTypes.Canvas }) => {
  canvas.getObjects().forEach((obj) => canvas.remove(obj));
};

export default removeAllObjects;
