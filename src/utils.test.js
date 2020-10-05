import { getCapitalized } from './utils';

describe('getCapitalized', () => {
  test('should capitalize single word', () => {
    var input = "hello world";
    var output = getCapitalized(input);
    expect(output).toBe("Hello world");
  });

  test('should capitalize multiple words', () => {
    var input = "hello world";
    var output = getCapitalized(input);
    expect(output).toBe("Hello world");
  });
});