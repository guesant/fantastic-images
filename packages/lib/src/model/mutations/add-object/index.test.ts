import ADD_OBJECT from '../add-object';

test('Should add object to template', () => {
  expect(
    ADD_OBJECT({ object: { id: '02' } })({
      model: {
        fabricExported: {
          objects: [{ id: '01' }],
        },
      } as any,
    })
  ).toEqual({
    model: {
      fabricExported: {
        objects: [{ id: '01' }, { id: '02' }],
      },
    },
  });
});
