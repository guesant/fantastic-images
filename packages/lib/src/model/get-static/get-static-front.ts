import { TemplateStaticImage } from '@fantastic-images/types';

const getStaticFront = (staticImages: TemplateStaticImage[]) =>
  staticImages.filter(({ position }) => position === 'front');

export default getStaticFront;
