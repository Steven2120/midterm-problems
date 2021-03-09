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

function countWords(str) {
  let output = "";
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    output += words[i];
  }
  return output.length - 4;
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
  if (str.includes("A")) {
    return true;
  } else {
    return false;
  }
}

function containsNonAlphanumeric(str) {
  if (!str.indexOf("a")) {
    return true;
  } else {
    return false;
  }
}

function containsSpace(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      return true;
    } else {
      return false;
    }
  }
}

function digits(num) {
  
}

function truncate(str) {
  if (str.length >= 15) {
    return str.substr(0,8) + "...";
  } else {
    return str;
  }
}

function isValidPassword(str) {
  if (str !== /[A-Z0-9]/) {
    return false;
  }
}

function onlyPunchy(arr1, arr2) {
  for (let i = 0; i < arr.length; i++) {
    if (i < 15) {
      return arr[i];
    }
  }
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