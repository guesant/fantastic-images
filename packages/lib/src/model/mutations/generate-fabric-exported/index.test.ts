import GENERATE_FABRIC_EXPORTED from '../generate-fabric-exported';

test('Add objects template#fabricExported', () => {
  expect(
    GENERATE_FABRIC_EXPORTED({
      objects: [{ id: '01' }, { id: '02' }],
    })({
      model: {
        staticImages: [{ url: '@', position: '@' }],
      } as any,
    })
  ).toEqual({
    model: {
      staticImages: [{ url: '@', position: '@' }],
      fabricExported: {
        objects: [{ id: '01' }, { id: '02' }],
      },
    },
  });
});
