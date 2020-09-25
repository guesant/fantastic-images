import { ADD_STATIC_IMAGE } from '../add-static-image';

test('Should add static image to template', () => {
  expect(
    ADD_STATIC_IMAGE({ staticImages: [{ url: '#', position: 'back' }] })({
      model: {
        staticImages: [{ url: '@', position: '@' }],
      } as any,
    })
  ).toEqual({
    model: {
      staticImages: [
        { url: '@', position: '@' },
        { url: '#', position: 'back' },
      ],
    },
  });
});
