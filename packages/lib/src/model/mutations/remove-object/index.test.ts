import REMOVE_OBJECT from '../remove-object';

test('Remove objects from template based on number[]', () => {
  expect(
    REMOVE_OBJECT({
      idx: [1, 3],
    })({
      model: {
        fabricExported: {
          objects: ['a', 'b', 'c', 'd', 'e'],
        },
      } as any,
    })
  ).toEqual({
    model: {
      fabricExported: {
        objects: ['a', 'c', 'e'],
      },
    },
  });
});
