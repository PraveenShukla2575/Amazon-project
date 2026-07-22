import { formatcurrency } from '../../scripts/utils/money.js';

console.log('test suite : formatcurrency');
console.log('Convert money from Cents to dollars');
if(formatcurrency(2095) === '20.95')
{
  console.log('Passed');
}
else
{
  console.log('Failed');
}

console.log('works with the 0');
if(formatcurrency(0) === '0.00')
{
  console.log('Passed');
}
else
{
  console.log('Failed');
}
console.log('Works on rounding');
if(formatcurrency(2000.5) === '20.01')
{
  console.log('Passed');
}
else
{
  console.log('Failed');
}
console.log('rounds up to the nearest cent');
if(formatcurrency(2000.4) === '20.00')
{
  console.log('Passed');
}
else
{
  console.log('Failed');
}
