import { TemplateStaticImage } from '@fantastic-images/types';

export const getStaticBack = (staticImages: TemplateStaticImage[]) =>
  staticImages.filter(({ position }) => position === 'back');
