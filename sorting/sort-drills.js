//Used for multiple tests
const bigArray = [
  93,
  87,
  79,
  2,
  11,
  94,
  62,
  67,
  75,
  74,
  96,
  25,
  57,
  56,
  53,
  27,
  60,
  33,
  28,
  40,
  37,
  13,
  16,
  19,
  95,
  1,
  8,
  17,
  90,
  32,
  98,
  31,
  73,
  100,
  86,
  5,
  54,
  51,
  80,
  88,
  24,
  69,
  70,
  65,
  3,
  81,
  76,
  59,
  38,
  64,
  63,
  18,
  99,
  4,
  14,
  23,
  97,
  78,
  39,
  7,
  30,
  61,
  47,
  58,
  52,
  42,
  68,
  10,
  36,
  15,
  85,
  46,
  34,
  50,
  45,
  43,
  83,
  20,
  66,
  82,
  55,
  21,
  22,
  77,
  92,
  26,
  44,
  12,
  9,
  84,
  89,
  41,
  72,
  6,
  29,
  91,
  49,
  35,
  48
];

const orderedArray = [
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

// Write an O(n) algorithm to sort an array of integers
const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
};

const bubbleSort = array => {
  let swaps = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      swap(array, i, i + 1);
      swaps++;
    }
  }
  if (swaps > 0) {
    return bubbleSort(array);
  }
  return array;
};

console.log(bubbleSort(bigArray));

// Merge Sort:
const mergeSort = array => {
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);
  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
};

const merge = (left, right, array) => {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }
  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }
  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
};

console.log(mergeSort(bigArray));

//Quick Sort
const quickSort = (array, start = 0, end = array.length) => {
  start = start;
  end = end;
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
};

const partition = (array, start, end) => {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
};

console.log(quickSort(bigArray));

//Write an algorithm to shuffle an array into a random order in-place

/* Fisher-Yates Shuffle */

const shuffle = array => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  console.log(array);
  return array;
};

shuffle(orderedArray);
