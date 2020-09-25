import { UPDATE_OBJECT } from '../update-object';

test('Update object of template based on idx', () => {
  expect(
    UPDATE_OBJECT(
      3,
      '@@@' as any
    )({
      model: {
        fabricExported: {
          objects: ['a', 'b', 'c', '###'],
        },
      } as any,
    })
  ).toEqual({
    model: {
      fabricExported: {
        objects: ['a', 'b', 'c', '@@@'],
      },
    } as any,
  });
});
