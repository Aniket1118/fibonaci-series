//program to finfd the nth number of fiboanci series
//we know fibbonaci sries is i the form == 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

var a = 0;
var b = 1;
var n = 8;//the nth number of fibonacci series you want to find out
console.log(a);
console.log(b);
for(i=0;i<=n;i=i+1){
   var c=a+b;
    console.log(c);//0,1,1
    a = b;//putting b as a
    b = c;// buttina c as b
}
alert("the " + n + "th number is" + c)