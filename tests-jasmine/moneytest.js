import { formatcurrency } from '../scripts/utils/money.js';

describe('test suite : formatcurrency', () => {
  it('Convert money from Cents to dollars',() => {
    expect(formatcurrency(2095)).toEqual('20.95');
  });
  it('works with the 0',() => {
    expect(formatcurrency(0)).toEqual('0.00');
  });
  it('Works on rounding',() => {
    expect(formatcurrency(2000.5)).toEqual('20.01');
  });
  it('rounds up to the nearest cent',() => {
    expect(formatcurrency(2000.4)).toEqual('20.00');
  });
});