import { getStaticBack } from './get-static-back';

test('Should only return array with #position equals to "back"', () => {
  const backImages = getStaticBack([
    { url: '01', position: 'back' },
    { url: '02', position: 'front' },
    { url: '03', position: 'back' },
    { url: '04', position: 'front' },
  ]);

  expect(backImages).toHaveLength(2);
  expect(backImages.every(({ position }) => position === 'back')).toBe(true);
});
