function removeChar(str, position) {
  if (position < 0 || position >= str.length) {
    return "Invalid position";
  }
  return str.slice(0, position) + str.slice(position + 1);
}

console.log(removeChar("Text from which I am removing the character !! " , 10));

function changeCase(str) {
  let result = "";
  for (let ch of str) {
    if (ch === ch.toUpperCase()) {
      result += ch.toLowerCase();
    } else {
      result += ch.toUpperCase();
    }
  }
  return result;
}

console.log(changeCase("chaing the case UPPER"));

// Text from hich I am removing the character !! 
// CHAING THE CASE upper