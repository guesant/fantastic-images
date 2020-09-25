import { Template, TemplateStaticImage } from '@fantastic-images/types';
import { fabric as FabricTypes } from 'fabric';
import { imageFromURL } from '../image-from-url';

export const buildStatic = ({ fabric }: { fabric: any }) => (
  template: Template
) => async ({
  url,
}: {
  url: TemplateStaticImage['url'];
}): Promise<FabricTypes.Image> => {
  const img = await imageFromURL({ fabric })(url);
  if (!img) return img;
  const {
    model: {
      sketch: { width, height },
    },
  } = template;
  img.set({ scaleX: width / (img.get('width') || 0) });
  img.set({ scaleY: height / (img.get('height') || 0) });
  img.set('selectable', false);
  return img;
};
