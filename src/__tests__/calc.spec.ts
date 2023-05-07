import calc from '../index'

test('The calculation result should be 996.', () => {
  expect(calc(1024, 28)).toBe(996)
})
