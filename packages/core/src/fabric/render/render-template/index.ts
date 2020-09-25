import buildObject from '@fantastic-images/lib/dist/build-object';
import buildStatic from '@fantastic-images/lib/dist/build-static';
import removeAllObjects from '@fantastic-images/lib/dist/canvas/remove-all-objects';
import {
  getStaticBack,
  getStaticFront,
} from '@fantastic-images/lib/dist/model/get-static';
import { Template } from '@fantastic-images/types';
import { Canvas } from 'fabric/fabric-impl';

const renderTemplate = ({ fabric }: { fabric: any }) => ({
  canvas,
}: {
  canvas: Canvas;
}) => async (template: Template): Promise<void> => {
  const { model } = template;
  const { staticImages, fabricExported } = model;
  const _buildStatic = buildStatic({ fabric });
  const __buildStatic = _buildStatic(template);
  const _buildObject = buildObject({ fabric });
  removeAllObjects({ canvas });

  const getBack = () =>
    getStaticBack(staticImages).map(({ url }) => __buildStatic({ url }));
  const getFront = () =>
    getStaticFront(staticImages).map(({ url }) => __buildStatic({ url }));
  const getObjects = () =>
    fabricExported.objects.map((object: any) => _buildObject({ object }));

  await Promise.all([
    Promise.all(getBack()),
    Promise.all(getObjects()),
    Promise.all(getFront()),
  ])
    .then(([back, objects, front]) => [...back, ...objects, ...front])
    .then((objects) => objects.forEach((obj) => canvas.add(obj)));

  canvas.requestRenderAll();
};

export default renderTemplate;
