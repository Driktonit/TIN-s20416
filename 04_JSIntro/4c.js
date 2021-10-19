function palindrome(s)
{
  let a = s.length -1;
  for( let i = 0 ; i < a/2 ;i++)
  {
    let x = s[i] ;
    let y = s[a-i];
    if( x != y)
    {
      return false;
    }
  }
  return true;
   
}

function palindrometekst(s)
{
  let result = palindrome(s);
  if(result == true)
  {
    console.log("palindrome");
  }
  else
  {
    console.log("not a palindrome");
  }
}
let test = "121";
palindrometekst(test);
let test1 = "1213";
palindrometekst(test1);