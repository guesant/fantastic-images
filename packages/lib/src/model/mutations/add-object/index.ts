import { Template, TemplateObject } from '@fantastic-images/types';

const ADD_OBJECT = ({ object }: { object: TemplateObject }) => (
  template: Template
): Template => ({
  ...template,
  model: {
    ...template.model,
    fabricExported: {
      ...template.model.fabricExported,
      objects: [...template.model.fabricExported.objects, object],
    },
  },
});

export default ADD_OBJECT;
