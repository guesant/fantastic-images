import { Template, TemplateStaticImage } from '@fantastic-images/types';

export const ADD_STATIC_IMAGE = ({
  staticImages,
}: {
  staticImages: TemplateStaticImage[];
}) => (template: Template): Template => ({
  ...template,
  model: {
    ...template.model,
    staticImages: [...template.model.staticImages, ...staticImages],
  },
});
