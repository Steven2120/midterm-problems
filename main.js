function isEvenlyDivisible(num1, num2) {
  if (num1 % num2 === 0) {
    return true;
  } else {
    return false;
  }
}

function halfSquare(num) {
  return Math.pow(num , 2) / 2;
}

function isLong(str) {
  if (str.length >= 15) {
    return true;
  } else {
    return false;
  }
}

function exclaim(str) {
  if (str[str.length - 1] === "!") {
    return str;
  } else {
    return str + "!";
  }
}

function countWords() {
}

function containsDigit(str) {
  if (typeof(str) === "number") {
    return true;
  } else {
    return false;
  }
}

function containsLowerCase(str) {
  if (typeof(str) === "str") {
    return true;
  } else {
    return false;
  }
}

function containsUpperCase(str) {
  
}

function containsNonAlphanumeric() {
}

function containsSpace() {
}

function digits() {
}

function truncate() {
}

function isValidPassword() {
}

function onlyPunchy() {
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}