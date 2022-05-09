<!=== Problem 01 ===!>
// return reverse string without changing special characters
// 'ab-bc' => 'cb-ba'
// 'a-bcd' => 'd-cba'
// 'a,b$c' => 'c,b$a'

function reverseWithoutSpecial(str) {
    let rev = "", sp = {}, count = 0;
    for(let i=0; i<str.length; i++) {
      if(!isAlphabet(str[i])) {
        sp[i] = str[i];
      }
    }
    
    for(let j=str.length-1; j>=0; j--) {
      if(sp[count]) {
        rev += sp[count]
      }
      
      if(isAlphabet(str[j])) {
        rev += str[j];
      }
      
      count++;
    }
    
    return rev;
}
  
function isAlphabet(ch) {
    return ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z'));
}
  
reverseWithoutSpecial("a-bcd")
