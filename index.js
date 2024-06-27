function calculateSum(a,b)
{
    return sum=a+b;
}
sum=calculateSum(13,28)
console.log(sum);

function isEven(arg)
 {
    if(arg%2==0)
        {
            return true;
        }
    else
    {
        return false;
    }
 }
console.log(isEven(253))

function findMax(a)
    {
      let len=a.length;
      let max=a[0];
      for (i=0;i<len;i++)
        {
            if(a[i]>max)
                {
                    max=a[i]
                }
        
        }
        return max;
    }
let array=[20,30,23,12,34,54,46,24,13,45,53,43,52,43,42,23,23,43,64,62,52,5]
ans=findMax(array);
console.log(ans);

function reverseString(str)
{
        return str.split('').reverse().join('');
    }
let str='My Name is Nahi and I am a MERN stack Learner';
reverse=reverseString(str);
console.log(reverse);

function filterOddNumbers(numbers)
{
    let c=[];
    len=numbers.length;
    for(i=0;i<len;i++){
    if(numbers[i] %2 !== 0)
        {
        c.push(numbers[i])
        }
    }
    return c;
}
num=[10,22,3,4,56,7,33,5,46,45,14,1,14,26,47,8,79,80,6,99];
Oddnmbrs=filterOddNumbers(num)
console.log(Oddnmbrs);

function sumArray(ar)
{
    let sum=0;
    len=ar.length;
    for(i=0;i<len;i++)
        {
            sum=ar[i]+sum;
        }
        return sum
}
console.log(sumArray(num));

function sortArray(numbers)
{
    let answer=[];
   ans=numbers.sort((a, b) => a - b);
   answer.push(ans);
   return answer;
        
}
console.log(sortArray(num))

function capitalizeFirstLetter(str)
{
    res=[]
    string=str.split(' ')
    len=string.length;
    for(i=0;i<len;i++)
        {
            if(string[i].length>0){
            res[i]=string[i].charAt(0).toUpperCase()+string[i].slice(1);
            }
        }
        return res.join(' ');
}
console.log(capitalizeFirstLetter(str));