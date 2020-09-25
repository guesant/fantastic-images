import { Template, TemplateStaticImage } from '@fantastic-images/types';

export const UPDATE_STATIC_IMAGE = (
  idx: number,
  updated: TemplateStaticImage
) => (template: Template): Template => {
  const { model } = template;
  const { staticImages } = model;
  const before = staticImages.slice(0, idx);
  const after = staticImages.slice(idx + 1);
  return {
    ...template,
    model: {
      ...template.model,
      staticImages: [...before, updated, ...after],
    },
  };
};
