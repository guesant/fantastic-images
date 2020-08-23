import getStaticFront from './get-static-front';

test('Should only return array with #position equals to "front"', () => {
  const frontImages = getStaticFront([
    { url: '01', position: 'back' },
    { url: '02', position: 'front' },
    { url: '03', position: 'back' },
    { url: '04', position: 'front' },
  ]);

  expect(frontImages).toHaveLength(2);
  expect(frontImages.every(({ position }) => position === 'front')).toBe(true);
});
