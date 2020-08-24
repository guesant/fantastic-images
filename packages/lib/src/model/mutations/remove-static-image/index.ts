import { Template } from '@fantastic-images/types';

const REMOVE_STATIC_IMAGE = ({ idx }: { idx: number[] }) => (
  template: Template
): Template => {
  const { model } = template;
  const { staticImages } = model;
  return {
    ...template,
    model: {
      ...template.model,
      staticImages: staticImages.filter(
        (_, filterIdx) => !idx.includes(filterIdx)
      ),
    },
  };
};

export default REMOVE_STATIC_IMAGE;
