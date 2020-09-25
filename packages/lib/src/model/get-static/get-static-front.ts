import { TemplateStaticImage } from '@fantastic-images/types';

export const getStaticFront = (staticImages: TemplateStaticImage[]) =>
  staticImages.filter(({ position }) => position === 'front');
