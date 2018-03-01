//剩余参数是对arguments的替代 
let add = (...rest)=>rest.reduce((a,b)=>a+b);
console.log(add(2,3,4,5))//形象的理解：rest是把2,3,4--->[2,3,4] ---> 扩展运算符刚好相反
//----> 把[2,3,4] ---> 2,3,4
let fn = (a,b,c)=>{
    console.log(a);
    console.log(b);
    console.log(c);
}
let arr = [2,3,4];
fn(2,3,4);
fn(...arr);

