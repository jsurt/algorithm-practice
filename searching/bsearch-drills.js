// The share price for a company over a week's trading is
// as follows: [128, 97, 121, 123, 98, 97, 105]. If you had to
// buy shares in the company on one day, and sell the shares on
// one of the following days, write an algorithm to work out
// what the maximum profit you could make would be.
const prices = [128, 97, 121, 123, 98, 97, 105];

const maxProfit = arr => {
  let profit;
  let min = arr[0];
  let day;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
      day = i;
    }
  }
  let max = arr[day];
  for (let j = day; j < arr.length; j++) {
    if (max < arr[j]) {
      max = arr[j];
    }
  }
  profit = max - min;
  console.log(profit);
  return profit;
};

maxProfit(prices);

// Imagine that you wanted to find what the highest floor of a 100
// story building you could drop an egg was, without the egg breaking.
// But you only have two eggs. Write an algorithm to work out which
// floors you should drop the eggs from to find this out in the most
// efficient way.
const floors = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
  63,
  64,
  65,
  66,
  67,
  68,
  69,
  70,
  71,
  72,
  73,
  74,
  75,
  76,
  77,
  78,
  79,
  80,
  81,
  82,
  83,
  84,
  85,
  86,
  87,
  88,
  89,
  90,
  91,
  92,
  93,
  94,
  95,
  96,
  97,
  98,
  99,
  100
];

const dropEggFrom = (floors, start, end) => {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? floors.length : end;
  const index = Math.floor((start + end) / 2);
  const breaksAt = 2;
  if (index < breaksAt) {
    return dropEggFrom(floors, index + 10, end);
  } else {
    return dropEggFrom(floors, index + 1, end);
  }
};

dropEggFrom(floors, 0, floors.length);
