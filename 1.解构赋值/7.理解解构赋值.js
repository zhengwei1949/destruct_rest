//ES6变量的解构赋值本质上是“模式匹配”,只要等号两边的模式相同，左边的变量就会被赋予匹配的右边的值，如果匹配不成功变量的值就等于undefined
const arr = [{name:'itcast'},{name:'jerry',age:20,sister:{name:'tommy',age:30}}];
const [,{sister:{age}}] = arr;
console.log(age);