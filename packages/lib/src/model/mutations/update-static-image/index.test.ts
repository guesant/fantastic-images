import { UPDATE_STATIC_IMAGE } from '../update-static-image';

test('Update static image of template based on idx', () => {
  expect(
    UPDATE_STATIC_IMAGE(
      3,
      '###' as any
    )({
      model: {
        staticImages: ['a', 'b', 'c', 'd'],
      } as any,
    })
  ).toEqual({
    model: {
      staticImages: ['a', 'b', 'c', '###'],
    },
  });
});
