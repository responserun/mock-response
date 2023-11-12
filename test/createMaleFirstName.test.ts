import { createMaleFirstName } from '../src/random/firstname';
import { Locale } from '../src/enums/locale';
import { expect, test, describe } from 'vitest';
import { maleFirstNames } from '../src/data/locale/tr/maleFirstName';

describe('createMaleFirstName()', () => {
  test('should return a male first name in Turkish', () => {
    const firstName = createMaleFirstName(Locale.tr);
    expect(maleFirstNames).toContain(firstName);
  });
});
