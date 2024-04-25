import InvalidInputError from '../InvalidInputError';

describe('InvalidInputError', () => {
  test('should have the correct name and message', () => {
    const error = new InvalidInputError('Test error');

    expect(error.name).toBe('InvalidInputError');
    expect(error.message).toBe('Test error');
  });
});