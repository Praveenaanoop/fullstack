var rev=0;
var rem=0;
var num=342;
var temp=num;
while(num>0)
{
rem=num%10;
rev=rev*10+rem;
num=parseInt(num/10);
}
console.log(rev);
if(rev==temp)
{
    console.log("pallindrome");
}
else{
    console.log("not pallindrome");
}