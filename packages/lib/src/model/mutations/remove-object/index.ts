import { Template } from '@fantastic-images/types';

const willBeRemoved = (removeList: number[] | number) => (idx: number) =>
  (Array.isArray(removeList) ? removeList : [removeList]).includes(idx);

export const REMOVE_OBJECT = ({ idx }: { idx: number[] | number }) => (
  template: Template
): Template => {
  const { model } = template;
  const { fabricExported } = model;
  const { objects } = fabricExported;
  const _willBeRemoved = willBeRemoved(idx);
  return {
    ...template,
    model: {
      ...template.model,
      fabricExported: {
        ...fabricExported,
        objects: objects.filter((_, filterIdx) => !_willBeRemoved(filterIdx)),
      },
    },
  };
};
