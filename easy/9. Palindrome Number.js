var isPalindrome = function(x) {
   var result = Number(String(x).split('').reverse().join(''))
   return result === x ? true : false
   
};


console.log(isPalindrome(121)); //121
console.log(isPalindrome(122)); //221
console.log(isPalindrome(-21)); //12-