import { staticFromURL } from '../static-from-url';

test('Should build static image object based on url with #position "back"', () => {
  expect(staticFromURL({ url: '#' })).toEqual({ url: '#', position: 'back' });
});
