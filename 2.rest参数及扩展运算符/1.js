//剩余参数是对arguments的替代 
//因为arguments只是一个伪数组，我们除了length以外数组的方法全部用不了
let add = function(){
    let count = 0;
    for(var i = 0;i<arguments.length;i++){
        count+=arguments[i];
    }
    return count;
}
console.log(add(2,3,4,5))

