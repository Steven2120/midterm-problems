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
  let counter = 0;
  for (let i = str.length - 1; i > 0; i--) {
    if (str[i] === "!") {
      counter++;
    } else {
      break;
    }
  }
  let solution = "";
  for (let i = 0; i < str.length - counter; i++) {
    solution += str[i];
  }
  return solution.concat("!");
}

function countWords(str) {
  return str.split(" ").length;
}

function containsDigit(str) {
  // let solution1 = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0" || str[i] === "1" ||str[i] === "2" ||str[i] === "3" ||str[i] === "4" ||str[i] === "5" ||str[i] === "6" ||str[i] === "7" ||str[i] === "8" ||str[i] === "9") {
      return true;
    }
  }
  return false;
}

function containsLowerCase(str) {
  let smallWords = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < str.length; i++) {
    if (smallWords.includes(str[i])) {
      return true;
    } 
  }
  return false;
}

function containsUpperCase(str) {
  let tallWords = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (const value of str) {
    if (tallWords.includes(value)) {
      return true;
    }
  }
  return false;
}

function containsNonAlphanumeric(str) {
  //loops through the string
  for (const non of str) {
  //if string does not contain either a digit, lower case word, or upper case word return true and we don't add an else statement here because we want to add the return false outside of the scope of the for and if
    if (!containsDigit(non) && !containsLowerCase(non) && !containsUpperCase(non)) {
      return true;
    }
  }
  //returns false for every other case
  return false;
}

function containsSpace(str) {
  //loops through the string
  for (let i = 0; i < str.length; i++) {
  // if the string contains any spaces at all return true
    if (str[i] === " ") {
      return true;
    }
  }
  //return false outside of the scope of the if and for loop
  return false;
}
function digits(num) {
  //defines variable that takes the num and first converts it to a string then it replaces both the "-" and "." with "" and lastly once we have just digits in string we split the number string in an array
  let sol = num.toString().replace("-", "").replace(".", "").split("");
  //defines a variable that will act as placeholder for final solution
  let solution = [];
  //loops through number string array and as it pushes each index it converts the number string to an actual integer
  for (let i = 0; i < sol.length; i++) {
    solution.push(parseInt(sol[i]));
  }
  //returns the array
  return solution;
}

function truncate(str) {
  //defines variable that will act as placeholder for solution
  let result = "";
  //if the string length is less than 15, does not shorten string
  if (str.length < 15) {
    return str;
  }
  //loops through the str and if string length is 15 or longer only the first 8 indexes will be added to our placeholder
  for (let i = 0; i < str.length; i++) {
    if (str.length >= 15 && i < 8) {
      result += str[i];
    }
  }
  //returns the new string with "..."
    return result.concat("...");
  }

function isValidPassword(str) {
  if (containsUpperCase(str) && containsLowerCase(str) && containsNonAlphanumeric(str) && containsDigit(str) && !containsSpace(str)) {
    return true;
  } else {
    return false;
  }
}

function onlyPunchy(titles) {
  //map or loop through titles using exclaim function we previously coded
  const result1 = titles.map(exclaim);
  //we filter out all strings that are shorter than 15
  const result2 = result1.filter(x => x.length < 15);
  return result2;
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