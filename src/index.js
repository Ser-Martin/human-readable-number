module.exports = function toReadable (number) {
  number = number + '';

  let one = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let two = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let ten = ['ten', 'eleven', 'twelve','thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  if (number === '0')
  {
    return 'zero';
  }

  if (number.length === 3 && number[1] !== '1')
  {
    let result = one[+number[0]] + ' hundred ' + two[+number[1]] + ' ' + one[+number[2]];
    result = result.trim();
    result = result.replace(/\s\s/g, ' ');
    return result;
  }

  if (number.length === 3 && number[1] === '1')
  {
    let result = one[+number[0]] + ' hundred ' + ten[+number[2]];
    return (result).trim();
  }

  if (number.length == 2 && number[0] === '1')
  {
    return ten[number[1]];
  }

  if (number.length == 2 && number[0] !== '1')
  {
    return (two[+number[0]] + ' ' + one[+number[1]]).trim();
  }

  if (number.length == 1)
  {
    return one[+number[0]];
  }
}
