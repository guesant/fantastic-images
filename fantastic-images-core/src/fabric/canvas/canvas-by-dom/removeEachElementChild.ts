export const removeEachElementChild = (element: HTMLElement) =>
  Array.from(element.children || []).forEach((child) => child.remove());
