import { TemplateStaticImage } from '@fantastic-images/types';

const getStaticBack = (staticImages: TemplateStaticImage[]) =>
  staticImages.filter(({ position }) => position === 'back');

export default getStaticBack;
