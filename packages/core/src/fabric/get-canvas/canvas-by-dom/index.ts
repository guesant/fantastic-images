import { Template } from '@fantastic-images/types';
import { fabric as FabricTypes } from 'fabric';

export const canvasByDom = ({ fabric }: { fabric: any }) => ({
  document,
}: {
  document: Document;
}) => ({ wrapper, id }: { wrapper: HTMLElement; id: string }) => (
  template: Template
): FabricTypes.Canvas => {
  Array.from(wrapper.children || []).forEach((child) => child.remove());
  const domcanvas = document.createElement('canvas');
  domcanvas.id = id;
  domcanvas.width = Math.max(template.model.sketch.width, 0);
  domcanvas.height = Math.max(template.model.sketch.height, 0);
  wrapper.append(domcanvas);
  return new fabric.Canvas(id);
};
