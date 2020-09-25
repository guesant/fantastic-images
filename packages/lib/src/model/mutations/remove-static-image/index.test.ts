import { REMOVE_STATIC_IMAGE } from '../remove-static-image';

test('Remove static images from template based on number[]', () => {
  expect(
    REMOVE_STATIC_IMAGE({ idx: [0, 2, 4] })({
      model: {
        staticImages: ['a', 'b', 'c', 'd', 'e'],
      } as any,
    })
  ).toEqual({
    model: {
      staticImages: ['b', 'd'],
    },
  });
});
