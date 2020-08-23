import { TemplateStaticImage } from '@fantastic-images/types';

const staticFromURL = ({
  url,
}: {
  url: TemplateStaticImage['url'];
}): TemplateStaticImage => ({ url, position: 'back' });

export default staticFromURL;
