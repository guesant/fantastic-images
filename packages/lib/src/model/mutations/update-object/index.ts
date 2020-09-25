import { Template } from '@fantastic-images/types/src/Template';
import { TemplateObject } from '@fantastic-images/types/src/TemplateObject';

export const UPDATE_OBJECT = (idx: number, updated: TemplateObject) => (
  template: Template
): Template => {
  const { model } = template;
  const { fabricExported } = model;
  const { objects } = fabricExported;
  const before = objects.slice(0, idx);
  const after = objects.slice(idx + 1);
  return {
    ...template,
    model: {
      ...template.model,
      fabricExported: {
        ...template.model.fabricExported,
        objects: [...before, updated, ...after],
      },
    },
  };
};
