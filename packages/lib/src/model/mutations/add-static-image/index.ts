import { Template, TemplateStaticImage } from '@fantastic-images/types';

const ADD_STATIC_IMAGE = ({
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

export default ADD_STATIC_IMAGE;
