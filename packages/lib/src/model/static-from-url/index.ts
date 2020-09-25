import { TemplateStaticImage } from '@fantastic-images/types';

export const staticFromURL = ({
  url,
}: {
  url: TemplateStaticImage['url'];
}): TemplateStaticImage => ({ url, position: 'back' });
